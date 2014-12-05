var Collection = require('ampersand-rest-collection');
var User = require('../models/user');

module.exports = Collection.extend({
  url: '/api/users',
  model: User
});