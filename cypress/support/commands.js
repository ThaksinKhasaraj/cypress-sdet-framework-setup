// Custom command for login
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);
  cy.get('button[type="submit"]').click();
});

// Custom command for logout
Cypress.Commands.add('logout', () => {
  cy.get('.oxd-userdropdown-tab, span.oxd-userdropdown-tab').click();
  cy.contains('Logout').click();
  cy.url().should('include', '/auth/login');
});
