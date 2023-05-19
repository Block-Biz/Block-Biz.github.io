FROM node:alpine

WORKDIR /src

COPY package.json .

COPY ./src/wait-for.sh /src/app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]

