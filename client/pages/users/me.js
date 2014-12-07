var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.pages.users.me,

  initialize: function(params) {
    this.model = window.me;
  },
  bindings: {
    'model.avatarUrl': {
      type: 'attribute',
      name: 'src',
      hook: 'user-avatar'
    },

    'model.fullName': {
      type: 'text',
      hook: 'user-full-name'
    }
  },
  autoRender: true,
  render: function() {
    this.renderWithTemplate();
  }
});