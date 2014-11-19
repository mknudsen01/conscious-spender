var hapi = require('hapi');
var server = hapi.createServer(8080, 'localhost');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');
var templatizer = require('templatizer');
var stylizer = require('stylizer');
var usersAPI = require('./plugins/usersAPI');
var categoriesAPI = require('./plugins/categoriesAPI');

server.route({
  method: "GET",
  path: '/api/me',
  handler: function(request, reply) {
    reply({
      id: '14',
      givenName: 'Matthew',
      familyName: 'Knudsen',
      email: 'mknudsen01@gmail.com'
    });
  }
});

server.pack.register([
  usersAPI,
  categoriesAPI,
  {
    plugin: moonboots,
    options: {
      appPath: '/{p*}',
      moonboots: {
        main: __dirname + '/client/app.js',
        developmentMode: config.isDev,
        stylesheets: [
          __dirname + '/public/reset.css',
          __dirname + '/public/styles.css'
        ],
        beforeBuildJS: function() {
          if(config.isDev) {
            templatizer(__dirname + '/templates', __dirname + '/client/templates.js');
          }
        },
        beforeBuildCSS: function(done) {
          if(!config.isDev) return done();
          stylizer({
            infile: __dirname + '/public/app/main.styl',
            outfile: __dirname + '/public/styles.css',
            development: true,
            watch: __dirname + '/public/app/**/.styl'
          }, done);
        }
      }
    }
  }
], function(){
  server.start();
  console.log("Server running at port 8080");
});