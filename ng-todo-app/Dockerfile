FROM node:12-alpine as builder

LABEL author="Dai Nguyen"
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist --prod

FROM nginx:1.21.3-alpine
LABEL author="Dai Nguyen"

# Copy custom nginx config
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443