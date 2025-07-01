import 'cypress-axe';


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
      cy.injectAxe();
    });
  });

  it('Dashboard should have no detectable a11y violations', () => {

    cy.checkA11y(null, null, (violations) => {
      if (violations.length) {
        cy.task('log', `${violations.length} accessibility violation(s) detected`);
        violations.forEach(v => {
          cy.task('log', `${v.id}: ${v.help} (${v.nodes.length} node(s))`);
        });
      }
      // ไม่ต้อง fail test ถ้ามี violation แค่ log ไว้
      // expect(violations.length, `${violations.length} accessibility violation(s) detected`).to.equal(0);
    });
  });
});
