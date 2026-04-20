'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { setupWebhook } = require('./services/graph-api');
const { handleMessages } = require('./services/message');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('WhatsApp Bot is running');
});

app.post('/webhook', (req, res) => {
    const messagingEvents = req.body.entry[0].messaging;
    messagingEvents.forEach(event => {
        handleMessages(event);
    });
    res.sendStatus(200);
});

setupWebhook();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
