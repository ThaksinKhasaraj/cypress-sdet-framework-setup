class ProfilePage {
  verifyProfileHeader() {
    cy.contains('Personal Details').should('exist');
  }
  editFirstName(newName) {
    cy.get('input[name="firstName"]').clear().type(newName);
  }
  save() {
    cy.get('button[type="submit"]').click();
    cy.contains('Successfully Saved').should('exist');
    cy.get('input[name="firstName"]').should('have.value', '');
  }
}
module.exports = new ProfilePage();
