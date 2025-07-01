class PIMPage {
  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    cy.get('button[type="submit"]').click();
  }
  verifyEmployeeExists(name) {
    cy.contains(name).should('exist');
  }
  verifyNoEmployeeFound() {
    cy.contains('No Records Found').should('exist');
  }
}
module.exports = new PIMPage();
