const http = require('http');
const os = require('os');

console.log("Node Http Server Starting Serving...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + " good one!" +"\n");
};

var www = http.createServer(handler);
www.listen(8080);