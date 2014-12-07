var View = require('ampersand-view');
var templates = require('../../templates');

module.exports = View.extend({
  template: templates.pages.users.show,

  initialize: function(params) {
    var self = this;
    this.collection.getOrFetch(params.id, function(err, model) {
      if(err) throw err;
      self.model = model;
    });
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