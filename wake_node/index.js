/*
	requires:
		* node.js (http://nodejs.org/)
		* express.js (http://expressjs.com/)
		* socket.io (http://socket.io/#how-to-use)
		* serialport.js (https://github.com/voodootikigod/node-serialport)
		
	based on the core examples for socket.io and serialport.js
	created 25 Feb 2014.
	
*/

var express = require('express'),		
	open = require('open'),             
	url = 'http://localhost:8080'; 


var app = express(),								  
   server = require('http').createServer(app),
   io = require('socket.io').listen(server);		

// configure server to serve static files from /js:
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
 	

// listen for incoming requests on the server:
server.listen(8080);								         
console.log("Listening for new clients on port 8080");
// open the app in a browser:
open(url);                   

// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendfile(__dirname + '/index.html');
});

app.get('/shake/*', function (request, response) {
  var strength = request.params[0];  
  console.log(strength);
  io.sockets.emit('broadcast', data);
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end();
});

io.sockets.on('connection', function (socket) {
  socket.on('shake', function (data) {
    console.log(data);
  });
});
