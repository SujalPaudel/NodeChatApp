const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = Process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
  console.log("New User connected");

  socket.on('disconnect', () => {
    console.log("User disconnected");
  });
});




// integration of server with express app to use the socket io
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
