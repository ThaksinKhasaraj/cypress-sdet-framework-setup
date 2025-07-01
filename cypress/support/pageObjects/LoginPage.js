const locators = {
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',
  submitButton: 'button[type="submit"]'
};

class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(locators.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(locators.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(locators.submitButton).click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

module.exports = new LoginPage();
