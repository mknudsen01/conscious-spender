var MainView = require('./views/main');
var domready = require('domready');
var Router = require('./ampersand-router');

window.app = {
  init: function() {
    var self = this;
    domready( function() {
      self.router = new Router();
      self.view = new MainView({
        el: document.body
      });
    });
    console.log("Hello, world!");
    self.router.history.start({pushState: true});
  }
};

window.app.init();