const locators = {
  admin: 'a[href*="admin"]',
  pim: 'a[href*="pim"]',
  leave: 'a[href*="leave"]',
  time: 'a[href*="time"]',
  recruitment: 'a[href*="recruitment"]',
  myInfo: 'a[href*="viewMyDetails"]',
  performance: 'a[href*="performance"]',
  dashboard: 'a[href*="dashboard"]',
  directory: 'a[href*="directory"]',
  maintenance: 'a[href*="maintenance"]',
  buzz: 'a[href*="buzz"]'
};

class MenuPage {
  openMenu(menuName) {
    cy.contains('a', menuName).click();
  }
  verifyMenuVisible(menuName) {
    cy.contains('a', menuName).should('be.visible');
  }
  goToAdmin() {
    cy.get(locators.admin).first().click();
  }
  goToPIM() {
    cy.get(locators.pim).first().click();
  }
  goToLeave() {
    cy.get(locators.leave).first().click();
  }
  goToTime() {
    cy.get(locators.time).first().click();
  }
  goToRecruitment() {
    cy.get(locators.recruitment).first().click();
  }
  goToMyInfo() {
    cy.get(locators.myInfo).first().click();
  }
  goToPerformance() {
    cy.get(locators.performance).first().click();
  }
  goToDashboard() {
    cy.get(locators.dashboard).first().click();
  }
  goToDirectory() {
    cy.get(locators.directory).first().click();
  }
  goToMaintenance() {
    cy.get(locators.maintenance).first().click();
  }
  goToBuzz() {
    cy.get(locators.buzz).first().click();
  }
}

module.exports = new MenuPage();
