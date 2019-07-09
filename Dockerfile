FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

RUN npm run-script build

CMD [ "npm", "run-script", "serve" ]
