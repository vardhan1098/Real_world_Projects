const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173", // Replace with your frontend's URL
        methods: ["GET", "POST"],
    },
});

// Middleware
app.use(cors());

// Socket.IO event listeners
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Listen for new messages
    socket.on("new_message", (messageData) => {
        console.log("Received message:", messageData);
        // Broadcast the message to all connected clients
        io.emit("receive_message", messageData);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

// Start the server
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
