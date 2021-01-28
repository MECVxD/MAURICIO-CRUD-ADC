FROM node:12-alpine3.10
RUN mkdir app
WORKDIR app
ENV PORT=8181
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD node index