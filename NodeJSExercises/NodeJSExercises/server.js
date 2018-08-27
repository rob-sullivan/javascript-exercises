'use strict';
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 1337;
var data = fs.readFileSync("input.txt");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(data);
    res.end('\nHello World\n');
}).listen(port);


console.log("Server is at http://localhost:" + port + "/");

console.log("\n" + data.toString());

