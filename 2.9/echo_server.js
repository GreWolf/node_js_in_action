"use strict";
exports.__esModule = true;
var net = require("net");
// import {write} from "fs";
var server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        socket.write(data.toString());
        console.log(data.toString());
    });
});
server.listen(8888);
