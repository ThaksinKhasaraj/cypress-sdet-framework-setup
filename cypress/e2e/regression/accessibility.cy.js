import 'cypress-axe';

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
      cy.injectAxe();
    });
  });

  it('Dashboard should have no detectable a11y violations', () => {
    cy.checkA11y();
  });
});
