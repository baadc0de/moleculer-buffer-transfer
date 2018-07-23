FROM node:alpine

COPY package.json .

RUN npm i --production

COPY . .

CMD npm run start