var socket = io();

socket.on('connect', function(){
  console.log("Connected to server");

  socket.emit('createEmail', {
    to: 'raju@example.com',
    text: 'Hey, this is Sujal'
  });


});

socket.on('disconnect', function(){
  console.log("Connection lost from the server");
});
//event listener

socket.on('newEmail', function(email){
  console.log('New Email', email);
});
