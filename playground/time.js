var moment = require('moment'); 

// var time = new Date();
// console.log(time.getDay());

var date = moment();
// date.add(100, 'year');
console.log(date.format('h:mm a'));