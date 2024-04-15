# Stage 1: Build Angular app
FROM node:latest as builder

WORKDIR /app

COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install --legacy-peer-deps

COPY . .

RUN ng build --prod

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
