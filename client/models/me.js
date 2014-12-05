var Model = require('ampersand-model');

module.exports = Model.extend({
  url: '/api/me',
  initialize: function() {
    this.fetch();
  },
  props: {
    id: 'number',
    givenName: 'string',
    familyName: 'string',
    email: 'string'
  }
});