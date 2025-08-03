const endpoints = require('../../support/apiEndpoints');
const apiKey = Cypress.env('reqresApiKey');
const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : {};

describe('Reqres.in Users Endpoint', () => {
  it('should GET list users', () => {
    cy.request({
      method: 'GET',
      url: `${endpoints.users}?page=2`,
      headers,
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.be.an('array');
      } else {
        // ถ้าไม่มี apiKey, reqres จะตอบ 200 ก็ได้ หรือ 401 ก็ได้ (ถ้า reqres config ให้ต้องใช้)
        expect(response.status).to.be.oneOf([200, 401]);
      }
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
      },
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'QA');
      } else {
        expect(response.status).to.be.oneOf([201, 401]);
      }
    });
  });

  it('should GET single user', () => {
    cy.request({
      method: 'GET',
      url: endpoints.singleUser(2),
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

  it('should GET single user not found', () => {
    cy.request({
      method: 'GET',
      url: endpoints.singleUser(23),
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

  it('should PUT update user', () => {
    cy.request({
      method: 'PUT',
      url: endpoints.singleUser(2),
      headers,
      body: {
        name: 'Tin',
        job: 'Lead QA'
      },
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'Lead QA');
      } else {
        expect(response.status).to.be.oneOf([200, 401]);
      }
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
      },
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Tin');
        expect(response.body).to.have.property('job', 'Senior QA');
      } else {
        expect(response.status).to.be.oneOf([200, 401]);
      }
    });
  });

  it('should DELETE user', () => {
    cy.request({
      method: 'DELETE',
      url: endpoints.singleUser(2),
      headers,
      failOnStatusCode: false
    }).then((response) => {
      if (apiKey) {
        expect(response.status).to.eq(204);
      } else {
        expect(response.status).to.be.oneOf([204, 401]);
      }
    });
  });
});
