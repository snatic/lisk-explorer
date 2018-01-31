FROM node:6 AS builder

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get --assume-yes install --no-install-recommends \
        build-essential \
	redis-server && \
    npm install -g grunt && \
    npm install -g bower

COPY . /home/lisk/lisk-explorer/
RUN useradd lisk && \
    chown lisk:lisk -R /home/lisk
USER lisk
RUN cd /home/lisk/lisk-explorer && \
    npm install
RUN cd /home/lisk/lisk-explorer && \
    npm run build && \
    redis-server --daemonize yes && \
    grunt candles:build && \
    grunt candles:update


FROM node:6-alpine

RUN adduser -D lisk 
COPY --chown=lisk:lisk --from=builder /home/lisk/lisk-explorer /home/lisk/lisk-explorer
COPY --chown=lisk:lisk config.docker.js /home/lisk/lisk-explorer/config.js

USER lisk
WORKDIR /home/lisk/lisk-explorer
CMD ["node", "app.js"]
