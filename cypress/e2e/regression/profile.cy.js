const loginPage = require('../../support/pageObjects/LoginPage');
const dashboardPage = require('../../support/pageObjects/DashboardPage');
const profilePage = require('../../support/pageObjects/ProfilePage');

describe('Profile Page', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
      dashboardPage.goToProfile();
    });
  });

  it('should display profile header', () => {
    profilePage.verifyProfileHeader();
  });

  it('should edit and save first name', () => {
    profilePage.editFirstName('NewName');
    profilePage.save();
    cy.get('input[name="firstName"]').should('have.value', 'NewName');
  });
});
