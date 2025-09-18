# Use Node.js 22 slim image
FROM node:22-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "run", "dev"]
