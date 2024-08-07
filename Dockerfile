# FROM cypress/included AS base
FROM alpine:latest
ARG http_proxy

# RUN node --version
# RUN npm --version
WORKDIR /app
COPY package*.json ./
ENV http_proxy=${http_proxy}
# ENV https_proxy=${http_proxy}
# RUN npm config set proxy ${http_proxy}
# RUN npm config set https-proxy ${http_proxy}
# RUN npm ci
# COPY . .
# RUN npx cypress verify
# CMD [ "npm","run","test" ]
RUN curl ifconfig.me