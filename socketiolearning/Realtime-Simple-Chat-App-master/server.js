// require("dotenv").config();
// const express = require('express');
// const app = express();

// // console.log(process.env.PORT)
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));

// app.listen(port, () => console.log("Listening on port " + port));


const io = require('socket.io')(3000);

const users = {}

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})



