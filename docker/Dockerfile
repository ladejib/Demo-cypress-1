FROM cypress/included:14.3.3

WORKDIR /e2e

COPY . .

RUN npm ci

ENTRYPOINT ["npx", "cypress", "run"]

