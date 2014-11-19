var Model = require('ampersand-model');

module.exports = new Model({
  props: {
    name: 'string',
    transactions: 'object'
  }
});