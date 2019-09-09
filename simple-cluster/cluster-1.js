var child = require("child_process").fork("child-1.js");

var server = require("net").createServer();

server.on("connection", function(socket) {
    socket.end("handled by parent");
});

server.listen(1337, function() {
    console.log("server is running....");
    child.send("server", server);
});
