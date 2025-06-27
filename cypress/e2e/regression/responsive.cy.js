describe('Responsive UI', () => {
  const viewports = [
    { device: 'iPhone X', width: 375, height: 812 },
    { device: 'iPad', width: 768, height: 1024 },
    { device: 'Desktop', width: 1280, height: 800 }
  ];

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users[0].username, users[0].password);
    });
  });

  viewports.forEach(vp => {
    it(`should display dashboard correctly on ${vp.device}`, () => {
      cy.viewport(vp.width, vp.height);
      cy.contains('Dashboard').should('be.visible');
    });
  });
});
