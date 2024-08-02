import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // Object with {userId: socketId}

io.on('connection', (socket) => {
    console.log("A user has connected.", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    // socket.on() is used to listen to events. this can be used both on client and server side.
    socket.on("disconnect", () => {
        console.log("A user has disconnected.", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {app, io, server}