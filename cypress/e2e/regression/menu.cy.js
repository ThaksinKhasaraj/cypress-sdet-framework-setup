const loginPage = require('../../support/pageObjects/LoginPage');
const menuPage = require('../../support/pageObjects/MenuPage');

describe('Main Menu Navigation', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage.login(users[0].username, users[0].password);
    });
  });

  it('should navigate to Admin menu', () => {
    menuPage.goToAdmin();
    cy.contains('Admin').should('exist');
  });

  it('should navigate to PIM menu', () => {
    menuPage.goToPIM();
    cy.contains('PIM').should('exist');
  });

  it('should navigate to Leave menu', () => {
    menuPage.goToLeave();
    cy.contains('Leave').should('exist');
  });

  it('should navigate to Time menu', () => {
    menuPage.goToTime();
    cy.contains('Time').should('exist');
  });

  it('should navigate to Recruitment menu', () => {
    menuPage.goToRecruitment();
    cy.contains('Recruitment').should('exist');
  });

  it('should navigate to My Info menu', () => {
    menuPage.goToMyInfo();
    cy.contains('Personal Details').should('exist');
  });

  it('should navigate to Performance menu', () => {
    menuPage.goToPerformance();
    cy.contains('Performance').should('exist');
  });

  it('should navigate to Dashboard menu', () => {
    menuPage.goToDashboard();
    cy.contains('Dashboard').should('exist');
  });

  it('should navigate to Directory menu', () => {
    menuPage.goToDirectory();
    cy.contains('Directory').should('exist');
  });

  it('should navigate to Maintenance menu', () => {
    menuPage.goToMaintenance();
    cy.contains('Maintenance', { timeout: 10000 }).should('exist');
  });

  it('should navigate to Buzz menu', () => {
    menuPage.goToBuzz();
    cy.contains('Buzz').should('exist');
  });
});
