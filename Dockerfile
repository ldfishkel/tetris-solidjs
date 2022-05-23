FROM node:16.11.1

COPY srv/package*.json ./

RUN npm install

# Bundle app source
COPY srv/ .

# EXPOSE 80 443
# VOLUME [ "/root/letsencrypt" ]
EXPOSE 8081

CMD [ "node", "index.js" ]