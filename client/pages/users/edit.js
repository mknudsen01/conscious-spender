var View = require('ampersand-view');
var templates = require('../../templates');
var UserForm = require('../../forms/user');

module.exports = View.extend({
  template: templates.pages.users.edit,
  autoRender: true,
  initialize: function(params) {
    var self = this;
    this.collection.getOrFetch(params.id, function(err, model){
      if(err) throw err;
      self.model = model;
    })
    this.model = params.collection.getOrFetch(params.id)
  },
  subviews: {
    form: {
      hook: 'user-form',
      waitFor: 'model',
      prepareView: function(el) {
        return new UserForm({
          el: el,
          model: this.model,
          submitCallback: function(data){
            this.model.save(data, {
              success: function() {
                app.navigate('/users');
              }
            });
          }
        });
      }
    }
  }
})
