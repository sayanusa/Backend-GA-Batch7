const express = require('express');
const app = express();

const http = require("http").createServer(app);

const port = 3000;
http.listen(port, function () { console.log("Listening to port " + port) })

//socket.io
var io = require("socket.io")(http);

//listener for new conneciton
io.on("conneciton", function (socket) {
    console.log("user connected", socket.id);
})

// app.get("/", function (request, result) {
//     result.send("hello world")
// })

var users = [];
 
io.on("connection", function (socket) {
    console.log("User connected", socket.id);
 
    // attach incoming listener for new user
    socket.on("user_connected", function (username) {
        // save in array
        users[username] = socket.id;
 
        // socket ID will be used to send message to individual person
 
        // notify all connected clients
        io.emit("user_connected", username);
    });

    // listen from client inside IO "connection" event
    socket.on("send_message", function (data) {
    // send event to receiver
    var socketId = users[data.receiver];
 
    io.to(socketId).emit("new_message", data);
});
});


// const users = {}

// io.on('connection', socket => {
//   socket.on('new-user', name => {
//     users[socket.id] = name
//     socket.broadcast.emit('user-connected', name)
//   })
//   socket.on('send-chat-message', message => {
//     socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
//   })
//   socket.on('disconnect', () => {
//     socket.broadcast.emit('user-disconnected', users[socket.id])
//     delete users[socket.id]
//   })
// })
