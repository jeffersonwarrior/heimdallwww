# Docker Setup for Heimdall Web

This document provides instructions for running the Heimdall web application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually included with Docker Desktop)

## Quick Start

To build and run the application:

```bash
# Build and start the container
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost:8080`


## Environment Variables

To use environment variables, create a `.env` file in the project root or set them in your shell:

```bash
# Example environment variables (uncomment and modify as needed)
# VITE_API_BASE_URL=https://api.heimdall.com
# VITE_GOOGLE_CLIENT_ID=your-google-client-id
# VITE_CLOUDINARY_CLOUD_NAME=your-cloudinary-name
# VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
# VITE_WEBINY_API_URL=https://your-webiny-api.com
```

Then uncomment the relevant lines in the Dockerfile and docker-compose.yml files.

## Docker Commands

### Build the image manually

```bash
# Production build
docker build -t heimdall-web .
```

### Run containers manually

```bash
# Production
docker run -p 8080:8080 heimdall-web
```

### Useful Docker commands

```bash
# View running containers
docker ps

# View logs
docker-compose logs -f heimdall-web

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Rebuild without cache
docker-compose build --no-cache
```

## Health Checks

The production container includes a health check that verifies the application is responding on port 8080. You can check the health status with:

```bash
docker ps
```

Look for the "STATUS" column to see if the container is healthy.

## Troubleshooting

### Port conflicts

If you get port conflicts, you can change the ports in `docker-compose.yml`:

```yaml
ports:
  - "3000:8080"  # Change 8080 to your preferred port
```

### Permission issues

If you encounter permission issues on Linux/macOS, you may need to adjust file permissions:

```bash
sudo chown -R $USER:$USER .
```

### Build cache issues

If you're having build issues, try clearing Docker's build cache:

```bash
docker builder prune
```

## Production Deployment

For production deployment, consider:

1. Using a reverse proxy (nginx) in front of the application
2. Setting up proper SSL/TLS certificates
3. Using environment-specific configuration files
4. Implementing proper logging and monitoring
5. Setting up container orchestration (Kubernetes, Docker Swarm, etc.)

## Multi-stage Build Benefits

The Dockerfile uses a multi-stage build which:

- Reduces the final image size by excluding development dependencies
- Improves build performance by caching dependency installation
- Separates build-time and runtime environments
- Enhances security by running as non-root user
