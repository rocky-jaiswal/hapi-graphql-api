FROM node:10-alpine

ENV APPLICATION_USER node

RUN mkdir /opt/app

WORKDIR /opt/app/
COPY . /opt/app/
RUN chown -R $APPLICATION_USER /opt/app

RUN yarn
RUN yarn build

USER $APPLICATION_USER
ENV NODE_ENV=production
EXPOSE 8080

CMD ["node", "/opt/app/dist/server.js"]
