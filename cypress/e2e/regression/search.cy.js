const loginPage = require('../../support/pageObjects/LoginPage');
const searchPage = require('../../support/pageObjects/SearchPage');
const searchData = require('../../test-data/search.json');


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
    cy.get('.oxd-topbar-header-title', { timeout: 10000 }).should('contain', 'Dashboard');

    cy.contains('a', 'PIM').click();
    cy.url().should('include', '/pim/viewEmployeeList'); 
    cy.get('input[placeholder="Type for hints..."]', { timeout: 10000 }).should('be.visible');
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
