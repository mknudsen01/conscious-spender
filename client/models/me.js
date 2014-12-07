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
  },

  derived: {
    fullName: {
      deps: ['givenName', 'familyName'],
      fn: function() {
        return this.givenName + ' ' + this.familyName;
      }
    },

    avatarUrl: {
      deps: ['id', 'fullName'],
      fn: function() {
        return "http://robohash.org/"+ this.fullName;
      }
    },

    viewUrl: {
      deps: ['id'],
      fn: function() {
        return "users/" + this.id;
      }
    }
  }
});