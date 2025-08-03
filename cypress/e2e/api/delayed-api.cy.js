const endpoints = require('../../support/apiEndpoints');
const apiKey = Cypress.env('reqresApiKey'); 

describe('Reqres.in Delayed Response', () => {
  it('should GET users with delay', () => {
    cy.request({
      method: 'GET',
      url: `${endpoints.users}?delay=3`,
      headers: apiKey ? { 'x-api-key': apiKey } : {},
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.be.an('array');
      } else {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('error');
      }
    });
  });
});