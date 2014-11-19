var API = require('hapi-dummy-api');

module.exports = new API({
  data: [
    {
      id: '1',
      userId: '14',
      name: 'rent'
    },

    {
      id: '2',
      userId: '14',
      name: 'clothing'
    },

    {
      id: '3',
      userId: '12',
      name: ''
    }
  ],
  rootUrl: '/api/categories',
  name: 'fake-categories-api',
  version: '0.0.1'
});