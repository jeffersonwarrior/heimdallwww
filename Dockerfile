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

# Install a simple HTTP server that works properly
RUN npm install -g serve

# Change ownership of all files to nextjs user
RUN chown -R nextjs:nodejs /app

USER nextjs
EXPOSE 8080

# Use serve with the same configuration that works for other images
CMD ["serve", "dist", "-l", "8080"]
