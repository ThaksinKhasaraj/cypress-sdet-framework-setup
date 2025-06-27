const loginPage = require('../../support/pageObjects/LoginPage');
const menuPage = require('../../support/pageObjects/MenuPage');

describe('Main Menu Navigation', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
  });

  it('should navigate to all main menus', () => {
    menuPage.goToAdmin();
    cy.contains('Admin').should('exist');
    menuPage.goToPIM();
    cy.contains('PIM').should('exist');
    menuPage.goToLeave();
    cy.contains('Leave').should('exist');
    menuPage.goToTime();
    cy.contains('Time').should('exist');
    menuPage.goToRecruitment();
    cy.contains('Recruitment').should('exist');
    menuPage.goToMyInfo();
    cy.contains('Personal Details').should('exist');
    menuPage.goToPerformance();
    cy.contains('Performance').should('exist');
    menuPage.goToDashboard();
    cy.contains('Dashboard').should('exist');
    menuPage.goToDirectory();
    cy.contains('Directory').should('exist');
    menuPage.goToMaintenance();
    cy.contains('Maintenance').should('exist');
    menuPage.goToBuzz();
    cy.contains('Buzz').should('exist');
  });
});
