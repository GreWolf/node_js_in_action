const http = require('http');

server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end("main page");
    } else if (request.url === '/test') {
        response.end("test page");
    } else {
        response.end(request.url);
    }

})

server.listen(3000, () => console.log("started..."))