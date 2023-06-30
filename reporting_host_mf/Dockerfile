FROM  node:18.16.1-bullseye

WORKDIR /web_reporting

COPY /../package.json .

RUN npn install

COPY . .

EXPOSE 3050

CMD ["npm", "start"]
