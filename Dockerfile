FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN mkdir -p /usr/src/app/node_modules && chmod -R 777 /usr/src/app/node_modules

RUN npm install 

COPY ./ ./

RUN chmod 755 ./startup.sh

ENTRYPOINT [ "./startup.sh" ]

EXPOSE 8000

CMD ["./startup.sh","npm", "run", "dev"]