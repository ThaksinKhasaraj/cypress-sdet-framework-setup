const loginPage = require('../../support/pageObjects/LoginPage');
const dashboardPage = require('../../support/pageObjects/DashboardPage');

describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
  });

  it('should display dashboard welcome message', () => {
    dashboardPage.verifyWelcomeMessage();
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
  });
});
