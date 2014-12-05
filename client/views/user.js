var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.partials.user,
  bindings: {
    'model.fullName': {
      type: 'text',
      hook: 'username'
    }
  }
});