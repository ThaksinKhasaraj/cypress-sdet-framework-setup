const loginLocators = {
  usernameInput: 'input[name="username"]',
  passwordInput: 'input[name="password"]',
  submitButton: 'button[type="submit"]'
};

const logoutLocators = {
  userDropdown: '.oxd-userdropdown-tab, span.oxd-userdropdown-tab',
  logoutText: 'Logout'
};

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
  cy.get(loginLocators.usernameInput).clear().type(username);
  cy.get(loginLocators.passwordInput).clear().type(password);
  cy.get(loginLocators.submitButton).click();
});

// Custom command for logout
Cypress.Commands.add('logout', () => {
  cy.get(logoutLocators.userDropdown).click();
  cy.contains(logoutLocators.logoutText).click();
  cy.url().should('include', '/auth/login');
});
