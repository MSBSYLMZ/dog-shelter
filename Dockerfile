# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install --only=production

# add app
COPY . .

# start app
CMD ["npm", "start"]

EXPOSE 3000