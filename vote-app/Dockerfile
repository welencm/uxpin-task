FROM node:argon

# Create app directory
RUN mkdir -p /vote-app
WORKDIR /vote-app

# Install app dependencies
COPY . /vote-app
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
