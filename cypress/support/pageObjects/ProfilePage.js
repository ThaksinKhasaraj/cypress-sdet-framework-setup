const locators = {
  profileHeader: 'Personal Details',
  firstNameInput: 'input[name="firstName"]',
  submitButton: 'button[type="submit"]'
};

class ProfilePage {
  verifyProfileHeader() {
    cy.contains(locators.profileHeader).should('exist');
  }
  editFirstName(newName) {
    cy.get(locators.firstNameInput).clear().type(newName);
  }
  save() {
    cy.get(locators.submitButton).click();
    cy.contains('Successfully Saved').should('exist');
  }
}
module.exports = new ProfilePage();
