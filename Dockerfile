FROM node:19

COPY src src
RUN npm install --prefix=src && npm start --prefix=src
