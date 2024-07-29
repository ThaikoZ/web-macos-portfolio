FROM node:20-alpine

WORKDIR /app

RUN yarn global add nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
