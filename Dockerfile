FROM node:18

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install 

COPY startup.sh ./startup.sh

RUN chmod +x ./startup.sh

EXPOSE 8000

ENTRYPOINT [ "./startup.sh" ]

CMD ["npm" , "run", "dev"]
