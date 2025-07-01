const viewports = require('../../test-data/viewports.json');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Responsive UI', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
      cy.url().should('include', '/dashboard');
    });
  });

  viewports.forEach(vp => {
    it(`should display dashboard correctly on ${vp.device}`, () => {
      cy.viewport(vp.width, vp.height);
      cy.contains('Dashboard').should('be.visible');
    });
  });
});
