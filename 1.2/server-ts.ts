import * as http from 'http'

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse): void =>  {
        response.end("ed");
})

server.listen(3000, () => console.log("started..."))