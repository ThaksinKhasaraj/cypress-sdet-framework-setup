const endpoints = require('../../support/apiEndpoints');
const apiKey = Cypress.env('reqresApiKey');
const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};

describe('Reqres.in Resource Endpoint', () => {
  it('should GET list resource', () => {
    cy.request({
      method: 'GET',
      url: endpoints.resource,
      headers,
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.be.an('array');
      } else {
        expect(response.status).to.be.oneOf([200, 401]);
      }
    });
  });

  it('should GET single resource', () => {
    cy.request({
      method: 'GET',
      url: endpoints.singleResource(2),
      headers,
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id', 2);
      } else {
        expect(response.status).to.be.oneOf([200, 401]);
      }
    });
  });

  it('should GET single resource not found', () => {
    cy.request({
      method: 'GET',
      url: endpoints.singleResource(23),
      headers,
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(404);
      } else {
        expect(response.status).to.be.oneOf([404, 401]);
      }
    });
  });
});
