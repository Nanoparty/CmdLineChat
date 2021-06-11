const axios = require('axios');
const WebSocket = require('ws');

const URL = '';
const PORT = '3000';

function createMessagingSocket() {
    console.log("creating socket")
    return new WebSocket(`ws://${URL}:${PORT}/messages`);
}

function getMessages() {
    return axios.get(`http://${URL}:${PORT}/messages`).then(res => res.data);
}

function sendMessage(message) {
    return axios.post(`http://${URL}:${PORT}/messages`, message).catch((err) => {
        console.log("Post Error:")
        console.log(err);
    });
}

module.exports.createMessagingSocket = createMessagingSocket;
module.exports.getMessages = getMessages;
module.exports.sendMessage = sendMessage;