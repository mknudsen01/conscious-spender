var View = require('ampersand-view');
var templates = require('../../templates');
var UserForm = require('../../forms/user');

module.exports = View.extend({
  template: templates.pages.users['new'],
  subviews: {
    form: {
      hook: 'new-user',
      prepareView: function(el) {
        return new UserForm({
          el: el,
          submitCallback: function(data) {
            console.log(data);
          }
        });
      }
    }
  }
});