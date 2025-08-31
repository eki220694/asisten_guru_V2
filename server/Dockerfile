# Dockerfile for server
FROM node:18-alpine

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server/ .

# Install Prisma CLI and generate client
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]