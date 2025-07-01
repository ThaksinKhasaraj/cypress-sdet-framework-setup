const viewports = require('../../test-data/viewports.json');

describe('Responsive UI', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
    });
  });

  viewports.forEach(vp => {
    it(`should display dashboard correctly on ${vp.device}`, () => {
      cy.viewport(vp.width, vp.height);
      cy.contains('Dashboard').should('be.visible');
    });
  });
});
