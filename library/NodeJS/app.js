var app = require('express').createServer()
var io = require('socket.io').listen(app);

app.listen(8000);
io.sockets.on('connection', function (socket) {
    // when the client emits 'loadsession'
    socket.on('loadsession', function () {
        // we tell the client to execute 'updatechat' with empty parameter
        io.sockets.emit('initNodes', "");
    });    
    socket.on('chat', function (data) {
        // we tell the client to execute 'updateNodes' with 1 parameter
        io.sockets.emit('updateNodes', data);
    });
});
