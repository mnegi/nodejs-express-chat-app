var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	// res.send('<h1>Hello World!</h1>');
	res.sendFile(__dirname + '/index.html');
	//res.sendFile('/index.html');
});

/*
io.on('connection', function(socket){
	console.log('a user has connected');
	socket.on('disconnect', function(){
	console.log('user disconnected');
	});
});
*/

io.on('connection', function(socket){
  socket.broadcast.emit('hi');

  socket.on('chat message', function(msg){
  	console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3030, function(){
	console.log('listening on *:3030');
});