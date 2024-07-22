import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    baseUrl: "https://example.cypress.io",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env: {
      host: "https://webdriveruniversity.com",
    },
  },
});
