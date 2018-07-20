var socket = io();

socket.on('connect', function(){
  console.log("Connected to server");
});

socket.on('disconnect', function(){
  console.log("Connection lost from the server");
});
//event listener

socket.on('newMessage', function(Message){
  console.log('New Message', Message);
});
