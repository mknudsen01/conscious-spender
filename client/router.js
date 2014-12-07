var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CategoriesPage = require('./pages/categories');
var UserPage = require('./pages/user');
var UsersPage = require('./pages/users');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'categories': 'categories',
    'users': 'users',
    'users/me': 'userProfile',
    'users/:id': 'userProfile'
  },

  home: function() {
    this.trigger('page', new HomePage() );
  },

  categories: function() {
    this.trigger('page', new CategoriesPage() );
  },

  userProfile: function(id) {
    if(id) {
      this.trigger('page', new UserPage({
        id: Number(id),
        collection: app.users
      }) );
    } else {
      this.trigger('page', new UserPage({
        id: window.me.id,
        collection: app.users
      }) );
    }
  },

  users: function() {
    this.trigger('page', new UsersPage({
      collection: app.users
    }) );
  }
});