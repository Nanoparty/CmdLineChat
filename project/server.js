const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app);

const messages = [{id: 0, text: 'Welcome!', username: 'Chat Room'}];
const sockets = [];

app.use(express.json());

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});

app.get('/messages', (req, res) => {
    console.log("Sending Messages")
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body;
    messages.push(message);

    for (const socket of sockets) {
        socket.send(JSON.stringify(message));
    }
});

app.ws('/messages', socket => {
    sockets.push(socket);
    console.log("new socket")

    socket.on('close', () => {
        sockets.splice(sockets.indexOf(socket, 1));
    });
});