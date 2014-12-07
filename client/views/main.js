var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');
var dom = require('ampersand-dom');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]': 'handleLinkClick'
  },
  bindings: {
    'model.givenName': {
      type: 'text',
      hook: 'username'
    },

    'model.viewUrl': {
      type: 'attribute',
      name: 'href',
      hook: 'action-user-profile'
    }
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
    this.updateActiveNav();
  },

  handleLinkClick: function(e) {
    var linkTag = e.target;
    if(linkTag.host == window.location.host) {
      app.router.history.navigate(linkTag.pathname, {trigger: true});
      e.preventDefault();
    }
  },

  updateActiveNav: function() {
    var pathname = window.location.pathname;
    var homeLinkTag = this.queryByHook('link-home');
    this.queryAll('.js-nav-links a').forEach( function(linkTag) {
      if(pathname.indexOf(linkTag.pathname) === 0){
        dom.addClass(linkTag, 'active');
      } else {
        dom.removeClass(linkTag, 'active');
      }
      if(homeLinkTag.pathname !== pathname) {
        dom.removeClass(homeLinkTag, 'active');
      }
    });

  }
});