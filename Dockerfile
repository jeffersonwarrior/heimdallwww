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

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install all dependencies (including dev dependencies for vite preview)
RUN pnpm install --frozen-lockfile

USER nextjs
EXPOSE 8080

# Use vite preview for production serving
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "8080"]
