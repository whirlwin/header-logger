FROM docker.io/node

COPY ./node_modules /opt/node_modules
COPY server.js /opt/server.js

WORKDIR /opt

CMD ["node", "server.js"]
