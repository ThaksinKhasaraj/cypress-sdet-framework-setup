const loginPage = require('../../support/pageObjects/LoginPage');

describe('Login with multiple user roles', () => {
  beforeEach(() => {

  });

  it('should login with all user roles', () => {
    cy.fixture('users').then((users) => {
      users.forEach((user) => {
        cy.login(user.username, user.password);
        cy.url().should('include', '/dashboard');
        cy.logout();
      });
    });
  });

  it('should not login with invalid credentials', () => {
    cy.login('invalid', 'invalid');
    cy.contains('Invalid credentials').should('exist');
  });

  it('should logout successfully', () => {
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
      cy.logout();
    });
  });
});