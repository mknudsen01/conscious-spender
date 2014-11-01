var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
  template: '<body><h1>Hello, world</h1><main data-hook="page-container"></main></body>',
  autoRender: true,
  initialize: function() {
    this.listenTo(app.router, 'page', this.handleNewPage);
  },

  render: function() {
    this.renderWithTemplate();
    this.pages = new ViewSwitcher(this.queryByHook('page-container') );
  },

  handleNewPage: function(page) {
    this.pages.set(page);
  }
});