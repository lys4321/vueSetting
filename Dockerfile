FROM node:latest AS vue-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN rm -rf node_modules && npm install
RUN npm run build

RUN apt update && apt install -y net-tools

FROM nginx:latest AS web-server-stage
COPY --from=vue-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 4444

CMD nginx -g "daemon off;"