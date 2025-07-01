class LoginPage {
  locators = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]'
  };

  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(this.locators.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.locators.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(this.locators.submitButton).click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

module.exports = new LoginPage();
