const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello Everybody");
})

server.listen(8080, () => {
    console.log("Server");
});
