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

socket.on('newLocationMessage', function(message){
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My Current Location</a>');

  li.text(`${message.from}`);
  a.attr('href', message.url);
  li.append(a);
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

var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
  if(!navigator.geolocation){
    console.log('Geolocation not supported by your browser');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createLocationMessage', {
      latitude : position.coords.latitude,
      longitude : position.coords.longitude
    });
  }, function(){
    console.log('Unable to fetch the location');
  });
});
