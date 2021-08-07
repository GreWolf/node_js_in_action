import * as net from 'net'
// import {write} from "fs";

const server: net.Server = net.createServer(socket => {
    socket.on('data', data => {
        socket.write(data.toString());
        console.log(data.toString())
    })
})

server.listen(8888);