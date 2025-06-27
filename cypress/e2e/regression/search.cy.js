const loginPage = require('../../support/pageObjects/LoginPage');
const searchPage = require('../../support/pageObjects/SearchPage');

describe('Search Functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
  });

  it('should search for an existing employee', () => {
    searchPage.search('Linda');
    searchPage.verifyResult('Linda');
  });

  it('should show no results for non-existing employee', () => {
    searchPage.search('NonExistingUser');
    cy.contains('No Records Found').should('exist');
  });
});
