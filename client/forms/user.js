var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var templates = require('../templates');

module.exports = FormView.extend({
  fields: function () {
    return [
      new InputView({
        label: 'Given Name',
        name: 'givenName',
        template: templates.forms.textInput,
        value: this.model.givenName || '',
        required: true,
        placeholder: 'Given Name',
        parent: this,
        tests: [
          function(val) {
            if(val.length < 4) return "Name must be longer than 4 characters";
          }
        ]
      }),
      new InputView({
        label: 'Family Name',
        template: templates.forms.textInput,
        name: 'familyName',
        value: this.model.familyName || '',
        required: true,
        placeholder: 'Family Name',
        parent: this,
        tests: [
          function(val) {
            if(val.length < 4) return "Name must be longer than 4 characters";
          }
        ]
      }),
      new InputView({
        label: 'Email',
        template: templates.forms.textInput,
        name: 'email',
        value: this.model.email || '',
        required: true,
        placeholder: 'Email',
        parent: this,
        tests: [
          function(val) {
            if(val.length > 3 && val.indexOf('@') < 1) return "Not a valid email address";
          }
        ]
      })
    ];
  }
});
