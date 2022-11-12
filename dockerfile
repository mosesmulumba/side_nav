FROM node:14

WORKDIR /app

COPY . /app

RUN npm install -g create-react-app && npm install

CMD ["npm", "start"]

EXPOSE 3000

