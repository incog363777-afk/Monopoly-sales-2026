const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// WhatsApp verification endpoint
app.get('/webhook', (req, res) => {
    const verifyToken = req.query['hub.verify_token'];
    const appToken = 'YOUR_APP_TOKEN'; // Replace with your app's token

    if (verifyToken === appToken) {
        res.status(200).send(req.query['hub.challenge']);
    } else {
        res.status(403).send('Forbidden');
    }
});

// Message handler
app.post('/webhook', (req, res) => {
    const incomingMessage = req.body;

    // Handle incoming message here
    console.log('Received message:', incomingMessage);

    // Respond back
    res.sendStatus(200);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
