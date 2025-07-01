const locators = {
  searchInput: 'input[placeholder="Type for hints..."]',
  submitButton: 'button[type="submit"]'
};

class SearchPage {
  noRecordsText = 'No Records Found';

  search(name) {
    cy.get(locators.searchInput).clear().type(name);
    cy.get(locators.submitButton).click();
  }

  verifyResult(name) {
    cy.contains(name).should('exist');
  }

  verifyNoResult() {
    cy.contains(this.noRecordsText).should('exist');
  }
}

module.exports = new SearchPage();
