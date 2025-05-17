#  Run Tests Locally

### Option 1
npm run cypress:open     # Interactive mode
npm run cypress:run      # Headless mode

### Option 2
docker-compose up --build --abort-on-container-exit

You can’t use network_mode: "host" — instead, update cypress.config.js to use:

baseUrl: 'http://host.docker.internal:3000'

## Install mochawesome

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
