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
    cy.get(locators.admin).click();
  }
  goToPIM() {
    cy.get(locators.pim).click();
  }
  goToLeave() {
    cy.get(locators.leave).click();
  }
  goToTime() {
    cy.get(locators.time).click();
  }
  goToRecruitment() {
    cy.get(locators.recruitment).click();
  }
  goToMyInfo() {
    cy.get(locators.myInfo).click();
  }
  goToPerformance() {
    cy.get(locators.performance).click();
  }
  goToDashboard() {
    cy.get(locators.dashboard).click();
  }
  goToDirectory() {
    cy.get(locators.directory).click();
  }
  goToMaintenance() {
    cy.get(locators.maintenance).click();
  }
  goToBuzz() {
    cy.get(locators.buzz).click();
  }
}

module.exports = new MenuPage();
