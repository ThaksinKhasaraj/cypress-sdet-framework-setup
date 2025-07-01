class PIMPage {
  // --- Locators ---
  searchInput = 'input[placeholder="Type for hints..."]';
  submitButton = 'button[type="submit"]';
  noRecordsText = 'No Records Found';

  searchEmployee(name) {
    cy.get(this.searchInput).clear().type(name);
    cy.get(this.submitButton).click();
  }
  verifyEmployeeExists(name) {
    cy.contains(name).should('exist');
  }
  verifyNoEmployeeFound() {
    cy.contains(this.noRecordsText).should('exist');
  }
}
module.exports = new PIMPage();
