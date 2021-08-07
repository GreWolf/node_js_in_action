"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("ed");
});
server.listen(3000, function () { return console.log("started..."); });
