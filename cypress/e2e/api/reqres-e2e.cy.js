const endpoints = require('../../support/apiEndpoints');
const apiKey = Cypress.env('reqresApiKey');
const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};

describe('Reqres.in E2E API flow', () => {
  let userId;

  it('should create, update, and delete a user successfully', () => {
    // Create user
    cy.request({
      method: 'POST',
      url: endpoints.users,
      headers,
      body: {
        name: 'Tin',
        job: 'QA'
      },
      failOnStatusCode: false
    }).then((createRes) => {
      if (apiKey) {
        expect(createRes.status).to.eq(201);
        expect(createRes.body).to.have.property('id');
        userId = createRes.body.id;

        // Update user
        return cy.request({
          method: 'PUT',
          url: endpoints.singleUser(userId),
          headers,
          body: {
            name: 'Tin',
            job: 'Lead QA'
          },
          failOnStatusCode: false
        });
      } else {
        expect(createRes.status).to.eq(401);
        return null;
      }
    }).then((updateRes) => {
      if (updateRes && apiKey) {
        expect(updateRes.status).to.eq(200);
        expect(updateRes.body).to.have.property('job', 'Lead QA');

        // Delete user
        return cy.request({
          method: 'DELETE',
          url: endpoints.singleUser(userId),
          headers,
          failOnStatusCode: false
        });
      }
    }).then((deleteRes) => {
      if (deleteRes && apiKey) {
        expect(deleteRes.status).to.eq(204);
      }
    });
  });

  it('should register and login successfully', () => {
    // Register
    cy.request({
      method: 'POST',
      url: endpoints.register,
      headers,
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
      failOnStatusCode: false
    }).then((registerRes) => {
      if (apiKey) {
        expect(registerRes.status).to.eq(200);
        expect(registerRes.body).to.have.property('token');

        // Login
        return cy.request({
          method: 'POST',
          url: endpoints.login,
          headers,
          body: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
          },
          failOnStatusCode: false
        });
      } else {
        expect(registerRes.status).to.eq(401);
        return null;
      }
    }).then((loginRes) => {
      if (loginRes && apiKey) {
        expect(loginRes.status).to.eq(200);
        expect(loginRes.body).to.have.property('token');
      }
    });
  });

  it('should get resource list and single resource', () => {
    // Get resource list
    cy.request({
      method: 'GET',
      url: endpoints.resource,
      headers,
      failOnStatusCode: false
    }).then((listRes) => {
      if (apiKey) {
        expect(listRes.status).to.eq(200);
        expect(listRes.body.data).to.be.an('array');

        // Get single resource
        return cy.request({
          method: 'GET',
          url: endpoints.singleResource(2),
          headers,
          failOnStatusCode: false
        });
      } else {
        expect(listRes.status).to.be.oneOf([200, 401]);
        return null;
      }
    }).then((singleRes) => {
      if (singleRes && apiKey) {
        expect(singleRes.status).to.eq(200);
        expect(singleRes.body.data).to.have.property('id', 2);
      }
    });
  });
});
