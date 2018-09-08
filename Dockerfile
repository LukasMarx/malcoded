FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4200

ENV PORT "4200"
ENV NODE_ENV production

ENTRYPOINT node server.js