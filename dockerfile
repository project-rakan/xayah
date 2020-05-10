FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

CMD [ "/bin/sh", "-c", "serve -s build" ] 