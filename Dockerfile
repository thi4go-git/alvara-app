FROM node:latest as angular
WORKDIR /app
COPY package.json /app
RUN npm install -g npm@9.1.3
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/alvaraapp /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#Comando para GERAR A IMAGEM
# docker build -t thiadocker/alvara-app .