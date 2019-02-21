FROM docker.io/node

COPY ./node_modules /opt/node_modules
COPY server.js /opt/server.js

WORKDIR /opt

EXPOSE 3213

CMD ["node", "server.js"]
