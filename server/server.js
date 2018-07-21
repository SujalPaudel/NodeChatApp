const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message')  


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log("New User connected");

  // for all the users

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat group'));
  
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Added'));

  socket.on('createMessage', (Message, callback) => {
    console.log('createMessage', Message);
    io.emit('newMessage', generateMessage(Message.from, Message.text))
    callback('This is from the server');});

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log("User disconnected");
  });
});


// integration of server with express app to use the socket io
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
