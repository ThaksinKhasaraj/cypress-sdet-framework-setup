class DashboardPage {
  verifyWelcomeMessage() {
    cy.contains('Dashboard').should('exist');
  }
  goToProfile() {
    cy.get('a[href*="viewMyDetails"]').click();
  }
  verifyWidget(widgetName) {
    cy.contains(widgetName).should('exist');
  }
}
module.exports = new DashboardPage();
