FROM node:22.9.0-alpine3.19
WORKDIR /home/api-express/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "backend/app.js"]
