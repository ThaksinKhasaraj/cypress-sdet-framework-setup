const loginPage = require('../../support/pageObjects/LoginPage');
const dashboardPage = require('../../support/pageObjects/DashboardPage');
const profilePage = require('../../support/pageObjects/ProfilePage');
const MenuPage = require('../../support/pageObjects/MenuPage');
const menuPage = new MenuPage();

describe('E2E Test Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.wrap(users[0]).as('user');
    });
  });

  it('TC01: Login as Admin and verify dashboard', function () {
    loginPage.login(this.user.username, this.user.password);
    dashboardPage.verifyWelcomeMessage();
  });

  it('TC02: Navigate to My Info and verify profile', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.verifyProfileHeader();
  });

  it('TC03: Edit and save first name in profile', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.editFirstName('E2EName');
    profilePage.save();
  });

  it('TC04: Search employee in PIM', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    cy.get('input[placeholder="Type for hints..."]').type('Linda');
    cy.get('button[type="submit"]').click();
    cy.contains('Linda').should('exist');
  });

  it('TC05: Logout', function () {
    loginPage.login(this.user.username, this.user.password);
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
  });

  it('TC06: Verify Admin menu is visible', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.verifyMenuVisible('Admin');
  });

  it('TC07: Go to Recruitment and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToRecruitment();
    cy.contains('Recruitment').should('exist');
  });

  it('TC08: Go to Leave and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToLeave();
    cy.contains('Leave').should('exist');
  });

  it('TC09: Go to Time and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToTime();
    cy.contains('Time').should('exist');
  });

  it('TC10: Go to Directory and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToDirectory();
    cy.contains('Directory').should('exist');
  });

  it('TC11: Go to Maintenance and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMaintenance();
    cy.contains('Maintenance').should('exist');
  });

  it('TC12: Go to Buzz and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToBuzz();
    cy.contains('Buzz').should('exist');
  });

  it('TC13: Go to Performance and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPerformance();
    cy.contains('Performance').should('exist');
  });

  it('TC14: Go to Dashboard and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToDashboard();
    cy.contains('Dashboard').should('exist');
  });

  it('TC15: Attempt login with invalid credentials', function () {
    loginPage.login('invalid', 'invalid');
    cy.contains('Invalid credentials').should('exist');
  });

  it('TC16: Edit profile and check save', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.editFirstName('Automation');
    profilePage.save();
  });

  it('TC17: Search for non-existing employee', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    cy.get('input[placeholder="Type for hints..."]').type('NonExistingUser');
    cy.get('button[type="submit"]').click();
    cy.contains('No Records Found').should('exist');
  });

  it('TC18: Open user dropdown', function () {
    loginPage.login(this.user.username, this.user.password);
    cy.get('.oxd-userdropdown-tab').click();
    cy.get('.oxd-dropdown-menu').should('be.visible');
  });

  it('TC19: Check profile header after login', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.verifyProfileHeader();
  });

  it('TC20: Go to Admin and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToAdmin();
    cy.contains('Admin').should('exist');
  });

  it('TC21: Go to PIM and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    cy.contains('PIM').should('exist');
  });

  it('TC22: Go to My Info and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    cy.contains('Personal Details').should('exist');
  });

  it('TC23: Go to Recruitment and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToRecruitment();
    cy.contains('Recruitment').should('exist');
  });

  it('TC24: Go to Leave and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToLeave();
    cy.contains('Leave').should('exist');
  });

  it('TC25: Go to Time and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToTime();
    cy.contains('Time').should('exist');
  });
});
