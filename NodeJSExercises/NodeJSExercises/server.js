'use strict';
var http = require('http');
//Import events module
var events = require('events');
var fs = require('fs');


//var data = fs.readFileSync("input.txt");

/*
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
*/

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('\nHello World\n');
}).listen(port);

console.log("Server is at http://localhost:" + port + "/");


//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function connected() {
    console.log("connection successful.");

    // Fire the data_received event
    eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});


// Fire the connection event 
eventEmitter.emit('connection');

