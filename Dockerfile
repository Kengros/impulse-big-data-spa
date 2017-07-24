FROM node:slim

RUN apt-get update && apt-get install -y git
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp

ADD webapp/package.json /usr/src/webapp/
RUN npm install
ADD webapp /usr/src/webapp
RUN npm run postinstall
EXPOSE 8080

CMD [ "npm", "run", "prod" ]

