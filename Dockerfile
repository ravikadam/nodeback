FROM node:11
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

RUN npm install -g yarn
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

COPY .env_prod ./.env

EXPOSE 4000

CMD [ "yarn", "start" ]

