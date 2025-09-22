# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm in the builder stage
RUN npm install -g pnpm


COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN pnpm build

# Production image, copy all the files and run vite preview
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production


# Don't run as root
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

RUN npm install -g pnpm

# Copy built application (public files are already included by Vite)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/vite.config.js ./vite.config.js

# Install a simple HTTP server
RUN npm install -g serve

# Change ownership of all files to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 8080

# Create a simple server that properly handles static files
COPY <<EOF /app/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Handle logo file specifically
  if (req.url === '/heimdall-logo-tight-header.png') {
    const logoPath = path.join(__dirname, 'dist', 'heimdall-logo-tight-header.png');

    fs.readFile(logoPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
        return;
      }

      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': data.length,
        'Cache-Control': 'public, max-age=31536000'
      });
      res.end(data);
    });
    return;
  }

  // Handle other static files
  let filePath = path.join(__dirname, 'dist', req.url);
  if (req.url === '/' || req.url.endsWith('/')) {
    filePath = path.join(__dirname, 'dist', 'index.html');
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for SPA routing
      fs.readFile(path.join(__dirname, 'dist', 'index.html'), (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
EOF

# Change ownership of all files to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 8080

# Use custom Node.js server
CMD ["node", "server.js"]
