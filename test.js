var http = require('http'),
    faye = require('faye');
    var fs= require('fs');

var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
 var client = new faye.Client('http://localhost:8000/faye');
 var HTMLform = fs.readFileSync('index.html');
var server = http.createServer(function(request, response) {
 
  response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
  				
   			 response.end(HTMLform);
});
 client.publish('/foo', {message: 'Hi there'});

bayeux.attach(server);
server.listen(8000);

