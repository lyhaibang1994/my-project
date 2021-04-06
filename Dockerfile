# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-alpine

ENV PORT=8080

# Install npm and node
RUN apk add --update npm

# Add bash
RUN apk add --no-cache bash

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# # Make our shell script executable
RUN chmod +x start.sh

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


CMD ["/bin/bash", "-c", "/app/start.sh && nginx -g 'daemon off;'"]