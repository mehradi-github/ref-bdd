FROM cypress/included AS base
WORKDIR /app
COPY package.json .
RUN npm install
CMD [ "npm","run","test" ]