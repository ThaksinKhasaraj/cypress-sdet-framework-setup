const locators = {
  changePasswordLink: 'Change Password',
  oldPasswordInput: 'input[name="oldPassword"]',
  newPasswordInput: 'input[name="newPassword"]',
  confirmPasswordInput: 'input[name="confirmPassword"]',
  submitButton: 'button[type="submit"]',
  successMessage: 'Password changed successfully'
};

class ChangePasswordPage {
  goToChangePassword() {
    cy.contains(locators.changePasswordLink).click();
  }
  fillOldPassword(oldPass) {
    cy.get(locators.oldPasswordInput).type(oldPass);
  }
  fillNewPassword(newPass) {
    cy.get(locators.newPasswordInput).type(newPass);
    cy.get(locators.confirmPasswordInput).type(newPass);
  }
  submit() {
    cy.get(locators.submitButton).click();
  }
  verifySuccess() {
    cy.contains(locators.successMessage).should('exist');
  }
  verifyError(message) {
    cy.contains(message).should('exist');
  }
}
module.exports = new ChangePasswordPage();
