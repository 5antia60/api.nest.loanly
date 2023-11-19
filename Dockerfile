FROM node:alpine AS development
FROM node:16

WORKDIR /usr/src/api

COPY . .
COPY ./.env /.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm build

EXPOSE 8080/tcp
EXPOSE 8080/udp

CMD ["npm", "run", "start:dev"]

FROM node:alpine as production
FROM node:16

WORKDIR /usr/src/api

COPY . .
COPY ./.env.production /.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm run build

EXPOSE 8080/tcp
EXPOSE 8080/udp

CMD ["npm", "run", "start:prod"]
