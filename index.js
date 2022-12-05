const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credential: true
    }
});

io.on("connection", (socket) => {
    console.log("what is socket: ", socket);
    console.log("Socket is active to be connected")

    socket.on("chat", (payload) => {
        console.log("payload", payload);
        io.emit("chat", payload);
    });
});

server.listen(5000, () => {
    console.log("Server is active...")
});