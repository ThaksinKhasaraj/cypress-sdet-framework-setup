const LoginPage = require('./LoginPage');
const DashboardPage = require('./DashboardPage');
const ProfilePage = require('./ProfilePage');
const MenuPage = require('./MenuPage');
const SearchPage = require('./SearchPage');
const ChangePasswordPage = require('./ChangePasswordPage');

class PageManager {
  loginPage = LoginPage;
  dashboardPage = DashboardPage;
  profilePage = ProfilePage;
  menuPage = MenuPage;
  searchPage = SearchPage;
  changePasswordPage = ChangePasswordPage;

  getMenuPage() {
    return MenuPage;
  }
  getSearchPage() {
    return SearchPage;
  }
  getChangePasswordPage() {
    return ChangePasswordPage;
  }
}

module.exports = new PageManager();
