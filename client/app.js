var MainView = require('./views/main');
var domready = require('domready');

window.app = {
  init: function() {
    var self = this;
    domready( function() {
      self.view = new MainView({
        el: document.body
      });
    });
    console.log("Hello, world!");
  }
};

window.app.init();