var Collection = require('ampersand-rest-collection');
var User = require('../models/user');

module.export = new Collection({
  url: '/api/users',
  model: User
});