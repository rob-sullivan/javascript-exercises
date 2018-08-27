'use strict';
var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 1337;
var data = fs.readFileSync("input.txt");


fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('\nHello World\n');
}).listen(port);


console.log("Server is at http://localhost:" + port + "/");




