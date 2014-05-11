var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', parseInt(process.env.PORT, 10) || 3000);

server.route({
  method: 'GET',
  path: '/'
  handler: function (req, res) {
    res('app is running');
  }
});

// Start the server
server.start();
