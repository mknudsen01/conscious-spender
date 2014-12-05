var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CategoriesPage = require('./pages/categories');
var ProfilePage = require('./pages/profile');
var UsersPage = require('./pages/users');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'categories': 'categories',
    'profile': 'profile',
    'users': 'users'
  },

  home: function() {
    this.trigger('page', new HomePage() );
  },

  categories: function() {
    this.trigger('page', new CategoriesPage() );
  },

  profile: function() {
    this.trigger('page', new ProfilePage() );
  },

  users: function() {
    this.trigger('page', new UsersPage({
      collection: app.users
    }) );
  }
});