FROM cypress/included AS base
RUN node --version
RUN npm --version
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set proxy http://127.0.0.1:2334
RUN npm config set https-proxy http://127.0.0.1:2334
RUN npm ci
COPY . .
RUN npx cypress verify
CMD [ "npm","run","test" ]