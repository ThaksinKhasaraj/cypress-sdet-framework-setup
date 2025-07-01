const loginPage = require('../support/pageObjects/LoginPage');
const dashboardPage = require('../support/pageObjects/DashboardPage');
const profilePage = require('../support/pageObjects/ProfilePage');
const menuPage = require('../support/pageObjects/MenuPage');
const pimPage = require('../support/pageObjects/PIMPage');
const searchData = require('../../test-data/search.json');
const profileData = require('../../test-data/profile.json');

describe('E2E Test Cases', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.wrap(users[0]).as('user');
    });
  });

  it('[smoke][login] TC01: Admin login and dashboard visible', function () {
    loginPage.login(this.user.username, this.user.password);
    dashboardPage.verifyWelcomeMessage();
  });

  it('[smoke][profile] TC02: Navigate to My Info and verify profile', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.verifyProfileHeader();
  });

  it('[regression][profile] TC03: Edit and save first name in profile', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.editFirstName(profileData.editFirstName);
    profilePage.save();
  });

  it('[smoke][pim][search] TC04: Search employee in PIM', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    pimPage.searchEmployee(searchData.existingEmployee);
    pimPage.verifyEmployeeExists(searchData.existingEmployee);
  });

  it('[smoke][logout] TC05: Logout as Admin', function () {
    loginPage.login(this.user.username, this.user.password);
    loginPage.logout();
  });

  it('[smoke][menu] TC06: Verify Admin menu is visible', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.verifyMenuVisible('Admin');
  });

  it('TC07: Go to Recruitment and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToRecruitment();
    menuPage.verifyMenuPage('Recruitment');
  });

  it('TC08: Go to Leave and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToLeave();
    menuPage.verifyMenuPage('Leave');
  });

  it('TC09: Go to Time and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToTime();
    menuPage.verifyMenuPage('Time');
  });

  it('TC10: Go to Directory and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToDirectory();
    menuPage.verifyMenuPage('Directory');
  });

  it('TC11: Go to Maintenance and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMaintenance();
    menuPage.verifyMenuPage('Maintenance');
  });

  it('TC12: Go to Buzz and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToBuzz();
    menuPage.verifyMenuPage('Buzz');
  });

  it('TC13: Go to Performance and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPerformance();
    menuPage.verifyMenuPage('Performance');
  });

  it('TC14: Go to Dashboard and verify page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToDashboard();
    menuPage.verifyMenuPage('Dashboard');
  });

  it('TC15: Attempt login with invalid credentials', function () {
    loginPage.login('invalid', 'invalid');
    loginPage.verifyInvalidCredentials();
  });

  it('TC16: Edit profile and check save', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.editFirstName(profileData.editFirstName2);
    profilePage.save();
  });

  it('TC17: Search for non-existing employee', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    pimPage.searchEmployee(searchData.nonExistingEmployee);
    pimPage.verifyNoEmployeeFound();
  });

  it('TC18: Open user dropdown', function () {
    loginPage.login(this.user.username, this.user.password);
    loginPage.openUserDropdown();
    loginPage.verifyDropdownVisible();
  });

  it('TC19: Check profile header after login', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.verifyProfileHeader();
  });

  it('TC20: Go to Admin and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToAdmin();
    menuPage.verifyMenuPage('Admin');
  });

  it('TC21: Go to PIM and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToPIM();
    menuPage.verifyMenuPage('PIM');
  });

  it('TC22: Go to My Info and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToMyInfo();
    profilePage.verifyProfileHeader();
  });

  it('TC23: Go to Recruitment and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToRecruitment();
    menuPage.verifyMenuPage('Recruitment');
  });

  it('TC24: Go to Leave and check page', function () {
    loginPage.login(this.user.username, this.user.password);
    menuPage.goToLeave();
    menuPage.verifyMenuPage('Leave');
  });

    it('TC25: Go to Time and check page', function () {
      loginPage.login(this.user.username, this.user.password);
      menuPage.goToTime();
      menuPage.verifyMenuPage('Time');
    });
  });