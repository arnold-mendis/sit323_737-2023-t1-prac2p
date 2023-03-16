//ARNOLD MENDIS SIT323
var http = require('http'); // Import Node.js package

var server = http.createServer(function (req, res) {   //create a web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><head><title>Node JS Web Server</title></head><body><h1>Hey, Its Arnold Mendis, Developer of this Web Server</h1></body></html>');
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.js web server at port 8000 is running..')