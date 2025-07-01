const locators = {
  dashboardHeader: 'Dashboard',
  profileLink: 'a[href*="viewMyDetails"]'
};

class DashboardPage {
  verifyWelcomeMessage() {
    cy.contains(locators.dashboardHeader).should('exist');
  }
  goToProfile() {
    cy.get(locators.profileLink).click();
  }
  verifyWidget(widgetName) {
    cy.contains(widgetName).should('exist');
  }
}
module.exports = new DashboardPage();
