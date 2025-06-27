class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').clear().type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

module.exports = new LoginPage();
