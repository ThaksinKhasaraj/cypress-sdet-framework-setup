class SearchPage {
  search(text) {
    cy.get('input[placeholder="Search"]').type(text);
    cy.get('button[type="submit"]').click();
  }
  verifyResult(text) {
    cy.contains(text).should('exist');
  }
  verifyNoResult() {
    cy.contains('No Records Found').should('exist');
  }
}
module.exports = new SearchPage();
