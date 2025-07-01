const locators = {
  searchInput: 'input[placeholder="Search"]',
  submitButton: 'button[type="submit"]'
};

class SearchPage {
  search(text) {
    cy.get(locators.searchInput).type(text);
    cy.get(locators.submitButton).click();
  }
  verifyResult(text) {
    cy.contains(text).should('exist');
  }
  verifyNoResult() {
    cy.contains('No Records Found').should('exist');
  }
}
module.exports = new SearchPage();
