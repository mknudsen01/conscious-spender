var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.partials.user,
  bindings: {
    'model.fullName': {
      type: 'text',
      hook: 'username'
    },

    'model.viewUrl': {
      type: 'attribute',
      name: 'href',
      hook: 'action-user-profile'
    }
  },

  events: {
    'click [data-hook="action-delete-user"]': 'handleDeleteClick'
  },

  handleDeleteClick: function() {
    this.model.destroy();
  }
});