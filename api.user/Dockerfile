FROM node:alpine

WORKDIR /src 
COPY . /src
RUN npm i

ENV NODE_ENV=production
ENV API_PORT=9000 

CMD ["npm", "run", "dev:server"]
