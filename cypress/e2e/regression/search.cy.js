const loginPage = require('../../support/pageObjects/LoginPage');
const searchPage = require('../../support/pageObjects/SearchPage');
const searchData = require('../../test-data/search.json');

describe('Search Functionality', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
  });

  it('should search for an existing employee', () => {
    searchPage.search(searchData.existingEmployee);
    searchPage.verifyResult(searchData.existingEmployee);
  });

  it('should show no results for non-existing employee', () => {
    searchPage.search(searchData.nonExistingEmployee);
    searchPage.verifyNoResult();
  });
});
