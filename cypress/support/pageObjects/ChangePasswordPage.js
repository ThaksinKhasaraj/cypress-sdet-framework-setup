class ChangePasswordPage {
  goToChangePassword() {
    cy.contains('Change Password').click();
  }
  fillOldPassword(oldPass) {
    cy.get('input[name="oldPassword"]').type(oldPass);
  }
  fillNewPassword(newPass) {
    cy.get('input[name="newPassword"]').type(newPass);
    cy.get('input[name="confirmPassword"]').type(newPass);
  }
  submit() {
    cy.get('button[type="submit"]').click();
  }
  verifySuccess() {
    cy.contains('Password changed successfully').should('exist');
  }
  verifyError(message) {
    cy.contains(message).should('exist');
  }
}
module.exports = new ChangePasswordPage();
