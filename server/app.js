const express = require('express');
const app = express();
const port = 3011;

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('A user connected');
  
  socket.on('disconnect', reason => {
    console.log('User disconnected');
  });

  socket.on('room', data => {
    console.log('Joining room');
    console.log(data);
    socket.join(data.room);
    console.log('Joined room');
  });

  socket.on('leave room', data => {
    console.log('Leaving room');
    console.log(data);
    socket.leave(data.room)
    console.log('Left room');
  });

  socket.on('new message', data => {
    console.log(data.room);
    socket.broadcast
    .to(data.room)
    .emit('Received message', data)
  });
});

server.listen(port, function() {
  console.log("Running websockets-app-be on "+ port);
});
