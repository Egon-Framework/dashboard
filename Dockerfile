FROM node:19

COPY src src
RUN npm install src && npm start
