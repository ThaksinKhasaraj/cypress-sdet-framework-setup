// (ลบเนื้อหาทั้งหมดของไฟล์นี้)
const DashboardPage = require('./DashboardPage');
const ProfilePage = require('./ProfilePage');
const MenuPage = require('./MenuPage');
const SearchPage = require('./SearchPage');
const ChangePasswordPage = require('./ChangePasswordPage');

class PageManager {
  loginPage = new LoginPage();
  dashboardPage = new DashboardPage();
  profilePage = new ProfilePage();
  menuPage = new MenuPage();
  searchPage = new SearchPage();
  changePasswordPage = new ChangePasswordPage();

  getMenuPage() {
    return this.menuPage;
  }
  getSearchPage() {
    return this.searchPage;
  }
  getChangePasswordPage() {
    return this.changePasswordPage;
  }
}

module.exports = new PageManager();
