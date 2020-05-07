let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

app.use('/public', express.static('public'));

server.listen(3000);

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});


users = [];
connecions = [];

io.sockets.on('connection', function (socket) {
    console.log("Успешное соединение");
    connecions.push(socket);

    socket.on('disconnect', function (data) {
        connecions.splice(connecions.indexOf(socket), 1);
        console.log("Отключились");
    });

    socket.on('send mess', function (data) {
        io.sockets.emit('add mess', { mess: data.mess, name: data.name, className: data.className });
    });
});