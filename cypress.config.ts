import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e',
    baseUrl: 'http://158.160.89.236/',
    fixturesFolder: false,
  },
});
