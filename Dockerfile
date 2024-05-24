FROM node:18-alpine

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json .
RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
