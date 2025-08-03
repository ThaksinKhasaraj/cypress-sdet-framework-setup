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


//custom command for login  API 
Cypress.Commands.add('apiLogin', (email, password) => {
  cy.request('POST', `${Cypress.env('apiBase')}/login`, {
    email,
    password
  }).then((response) => {
    expect(response.status).to.eq(200);

    Cypress.env('authToken', response.body.token);
  });
});

