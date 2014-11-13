var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]': 'handleLinkClick'
  },
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
  },

  handleLinkClick: function(e) {
    var linkTag = e.target;
    if(linkTag.host == window.location.host) {
      app.router.history.navigate(linkTag.pathname, {trigger: true});
      e.preventDefault();
    }
  }
});