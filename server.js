var hapi = require('hapi');
var server = hapi.createServer(8080, 'localhost');
var moonboots = require('moonboots_hapi');

server.pack.register({
  plugin: moonboots,
  options: {
    appPath: '/{p*}',
    moonboots: {
      main: __dirname + '/client/app.js',
      development: true,
      stylesheets: [
        __dirname + '/public/reset.css',
        __dirname + '/public/styles.css'
      ]
    }
  }
}, function(){
  server.start();
  console.log("Server running at port 8080");
});