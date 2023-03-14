#this will take the base of the image to be node.js
FROM node:14

#this defines the working directory
WORKDIR /app

#this will copy all the needed files and packages in the directory
COPY . /app

#this is what docker will follow will creating the image 
#(it's like a procedure it will follow during the creation)
RUN npm install -g create-react-app && npm install

#this will start up node server
CMD ["npm", "start"]

#the application will run on this port
EXPOSE 3000

