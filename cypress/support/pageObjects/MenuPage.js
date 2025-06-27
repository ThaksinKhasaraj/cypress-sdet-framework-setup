class MenuPage {
  openMenu(menuName) {
    cy.contains('a', menuName).click();
  }
  verifyMenuVisible(menuName) {
    cy.contains('a', menuName).should('be.visible');
  }
  goToAdmin() {
    cy.get('a[href*="admin"]').click();
  }
  goToPIM() {
    cy.get('a[href*="pim"]').click();
  }
  goToLeave() {
    cy.get('a[href*="leave"]').click();
  }
  goToTime() {
    cy.get('a[href*="time"]').click();
  }
  goToRecruitment() {
    cy.get('a[href*="recruitment"]').click();
  }
  goToMyInfo() {
    cy.get('a[href*="viewMyDetails"]').click();
  }
  goToPerformance() {
    cy.get('a[href*="performance"]').click();
  }
  goToDashboard() {
    cy.get('a[href*="dashboard"]').click();
  }
  goToDirectory() {
    cy.get('a[href*="directory"]').click();
  }
  goToMaintenance() {
    cy.get('a[href*="maintenance"]').click();
  }
  goToBuzz() {
    cy.get('a[href*="buzz"]').click();
  }
  verifyAllMenusVisible() {
    const menus = [
      'Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info',
      'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Buzz'
    ];
    menus.forEach(menu => {
      cy.contains('a', menu).should('be.visible');
    });
  }
}
module.exports = new MenuPage();
