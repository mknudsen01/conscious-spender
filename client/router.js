var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CategoriesPage = require('./pages/categories');
var ProfilePage = require('./pages/profile');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'categories': 'categories',
    'profile': 'profile'
  },

  home: function() {
    this.trigger('page', new HomePage() );
  },

  categories: function() {
    this.trigger('page', new CategoriesPage() );
  },

  profile: function() {
    this.trigger('page', new ProfilePage() );
  }
});