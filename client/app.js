var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./router');
var MeModel = require('./models/me');
var Users = require('./collections/users');
var Categories = require('./collections/categories');

window.app = {
  init: function() {
    var self = this;
    window.me = new MeModel();
    this.users = new Users();
    this.categories = new Categories();
    domready( function() {
      self.router = new Router();
      self.view = new MainView({
        el: document.body,
        model: me
      });
      self.router.history.start({pushState: true});
    });
  },

  navigate: function(url) {
    app.router.history.navigate(url, { trigger: true});
  }
};

window.app.init();