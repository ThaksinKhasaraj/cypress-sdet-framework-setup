const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    env: {
      ENV: 'qa',
      apiBase: 'https://reqres.in/api',
      reqresApiKey: 'reqres-free-v1'  
    }
  }
});
