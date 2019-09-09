const net = require("net");
var server = net.createServer();
server.on("connection", socket => {
    // 这个的作用和 [connectionListener]的作用一样。
    console.log("connection...");
    socket.on("data", data => {
        console.log(data.toString());
        //socket.write("Hello!!!\r\n");
        socket.write(
            "HTTP/1.1 200 OK \r\nContent-Type: text/plain \r\n\r\n afafaf\r\n"
        );
        socket.end();
    });
    socket.on("close", data => {
        console.log("socket CLOSED");
    });
});
server.listen(8082, () => {
    console.log("Server is running.... port:8082");
});
