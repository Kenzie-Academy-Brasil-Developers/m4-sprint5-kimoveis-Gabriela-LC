FROM node:16.15.1

ENV PORT=8888

EXPOSE 8888

WORKDIR /app

COPY "package.json" .

RUN yarn

COPY . .

CMD ["yarn", "dev"]