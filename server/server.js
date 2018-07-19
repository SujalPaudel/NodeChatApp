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

  socket.emit('newEmail', {
    from: 'sujal@example.com',
    text: 'Hey, whats up?',
    createdAt: 124
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('disconnect', () => {
    console.log("User disconnected");
  });
});




// integration of server with express app to use the socket io
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}
}
});
