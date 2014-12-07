var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: 'number',
    givenName: 'string',
    familyName: 'string',
    email: 'string',
    categories: 'object'
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