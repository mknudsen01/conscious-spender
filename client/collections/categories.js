var Collection = require('ampersand-rest-collection');
var Category = require('../models/category');

module.exports = Collection.extend({
  url: '/api/categories',
  model: Category
});