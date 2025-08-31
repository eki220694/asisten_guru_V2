# Dockerfile for server
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Install Prisma CLI and generate client
RUN npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]