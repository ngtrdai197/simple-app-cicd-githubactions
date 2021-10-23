FROM node:12.13-alpine AS builder

RUN apk add --no-cache --virtual .gyp python make g++ rsync
COPY package.json /build/package.json

RUN cd /build && \
  npm install

COPY . /build

RUN cd /build && \
  npm run build && \
  rm -rf node_modules && \
  npm install --production

WORKDIR /app/

# End builder stage
# End install-dep-prod stage

FROM node:12.4.0-alpine

WORKDIR /app/

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules

COPY --from=builder /build/.env .
COPY --from=builder /build/package.json .

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
# End
