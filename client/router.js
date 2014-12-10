var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var CategoriesPage = require('./pages/categories');
var UserPage = require('./pages/users/show');
var MePage = require('./pages/users/me');
var NewUserPage = require('./pages/users/new');
var UsersPage = require('./pages/users/index');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'categories': 'categories',
    'users': 'users',
    'users/me': 'me',
    'users/new': 'userNew',
    'users/:id': 'userProfile',
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
      })
      );
    }
  },

  me: function() {
    this.trigger('page', new MePage());
  },

  users: function() {
    this.trigger('page', new UsersPage({
      collection: app.users
    }) );
  },

  userNew: function() {
    this.trigger('page', new NewUserPage());
  }
});