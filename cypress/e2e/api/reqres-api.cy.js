const endpoints = require('../../support/apiEndpoints');
const apiKey = Cypress.env('reqresApiKey');
const headers = apiKey ? { 'x-api-key': apiKey } : {};

describe('Reqres.in API automation', () => {

  describe('Users Endpoint', () => {
    it('should GET list users', () => {
      cy.request({
        method: 'GET',
        url: `${endpoints.users}?page=2`,
        headers,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.be.an('array');
      });
    });

    it('should POST create user', () => {
      cy.request({
        method: 'POST',
        url: endpoints.users,
        headers,
        body: {
          name: 'Tin',
          job: 'QA'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'QA');
      });
    });

    it('should GET single user', () => {
      cy.request({
        method: 'GET',
        url: endpoints.singleUser(2),
        headers,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('id', 2);
      });
    });

    it('should GET single user not found', () => {
      cy.request({
        method: 'GET',
        url: endpoints.singleUser(23),
        failOnStatusCode: false,
        headers,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });

    it('should PUT update user', () => {
      cy.request({
        method: 'PUT',
        url: endpoints.singleUser(2),
        headers,
        body: {
          name: 'Tin',
          job: 'Lead QA'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'Lead QA');
      });
    });

    it('should PATCH update user', () => {
      cy.request({
        method: 'PATCH',
        url: endpoints.singleUser(2),
        headers,
        body: {
          name: 'Tin',
          job: 'Senior QA'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'Senior QA');
      });
    });

    it('should DELETE user', () => {
      cy.request({
        method: 'DELETE',
        url: endpoints.singleUser(2),
        headers,
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });

});
