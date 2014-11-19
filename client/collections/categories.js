var Collection = require('ampersand-rest-collection');
var Category = require('../models/category');

module.export = new Collection({
  url: '/api/categories',
  model: Category
});