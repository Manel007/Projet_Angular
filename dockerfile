# Stage 1: Build Angular app
FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN ng build --prod

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine

# Copy the built Angular app from the builder stage to Nginx's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
