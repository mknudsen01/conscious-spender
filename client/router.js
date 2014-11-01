var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CategoriesPage = require('./pages/categories');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'categories': 'categories'
  },

  home: function() {
    this.trigger('page', new HomePage() );
  },

  categories: function() {
    this.trigger('page', new CategoriesPage() );
  }
});