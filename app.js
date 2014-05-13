var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', parseInt(process.env.PORT, 10) || 3000);

server.route({
  method: 'GET',
  path: '/'
  handler: function (req, res) {
    res('app is running');
  }
});

var test = [
  {
    "id": 1,
    "data": "test"
  },
  {
    "id": 2,
    "data": "test"
}];

server.route({
  method: 'GET',
  path: '/test',
  handler: function (req, res) {
    res(test);
  }
})

server.route({
  method: 'GET',
  path: '/test/{id?}', // ? is a regex 0 or 1 id
  handler: function (req, res) {
    if (req.params.id) { // if id not null
      if (req.params.id >= test.length) {
        return res('Invalid ID').code(404);
      }
      return res(test[req.params.id]);
    }
    res(test); // return all the data
  }
})

// Start the server
server.start();
