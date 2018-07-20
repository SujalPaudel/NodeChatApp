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
  var li = jQuery('<li></li>');
  li.text(`${Message.from}: ${Message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from : 'User',
    text : jQuery('[name = message]').val()
  }, function(){
  });

});
