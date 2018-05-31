FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

ENV PORT "4200"

ENTRYPOINT node server.js