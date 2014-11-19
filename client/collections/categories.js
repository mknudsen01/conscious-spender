var Collection = require('ampersand-rest-collection');
var Categories = require('../models/categories');

module.export = new Collection({
  url: '/api/categories',
  model: Categories
});