const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    env: {
      apiBase: 'https://reqres.in/api',
      reqresApiKey: process.env.REQRES_API_KEY,
    }
  }
});