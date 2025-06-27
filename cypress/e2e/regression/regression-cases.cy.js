const loginPage = require('../../support/pageObjects/LoginPage');
const dashboardPage = require('../../support/pageObjects/DashboardPage');

describe('Regression Test Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.wrap(users[0]).as('user');
    });
  });

  it('Login and verify dashboard loads', function () {
    loginPage.login(this.user.username, this.user.password);
    dashboardPage.verifyWelcomeMessage();
  });

  it('should not login with invalid credentials', () => {
    loginPage.login('wrong', 'wrong');
    cy.contains('Invalid credentials').should('exist');
  });

  // ...add more regression cases as needed...
});
