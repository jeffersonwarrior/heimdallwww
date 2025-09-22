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

# Install nginx for proper static file serving
RUN apk add --no-cache nginx

# Configure nginx to serve both static files and handle SPA routing
COPY <<EOF /etc/nginx/nginx.conf
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 8080;
        server_name localhost;
        root /app/dist;
        index index.html;

        # Serve static files directly
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            try_files \$uri =404;
        }

        # Handle SPA routing
        location / {
            try_files \$uri \$uri/ /index.html;
        }

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
    }
}
EOF

# Change ownership of all files to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 8080

# Use nginx instead of serve
CMD ["nginx", "-g", "daemon off;"]
