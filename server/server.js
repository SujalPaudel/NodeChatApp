const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log("New User connected");

  // io.emit emits the content to the global user.

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
    io.emit('newEmail', {
      from : newEmail.from,
      text : newEmail.text,
      createdAt : new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log("User disconnected");
  });
});




// integration of server with express app to use the socket io
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
