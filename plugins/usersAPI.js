var API = require('hapi-dummy-api');

module.exports = new API({
  data: [
    {
      id: 14,
      givenName: "Matthew",
      familyName: "Knudsen",
      email: "mknudsen01@gmail.com",
      categories: {
        1: true,
        2: true
      }
    },

    {
      id: 2,
      givenName: "Jack",
      familyName: "Johnson",
      email: "jack@example.com",
      categories: {
        3: true
      }
    }
  ],
  rootUrl: '/api/users',
  name: 'fake-users-api',
  version: '0.0.1'
});