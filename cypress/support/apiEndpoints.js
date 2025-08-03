const apiBase = Cypress.env('apiBase') || 'https://reqres.in/api';

module.exports = {
  users: `${apiBase}/users`,
  singleUser: (id) => `${apiBase}/users/${id}`,
  resource: `${apiBase}/unknown`,
  singleResource: (id) => `${apiBase}/unknown/${id}`,
  register: `${apiBase}/register`,
  login: `${apiBase}/login`,
};
