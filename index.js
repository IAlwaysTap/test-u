const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/data-relay', (req, res) => {
    const userData = req.body;
    if (!userData) return res.status(400).send('Missing payload.');

    console.log('Received:', userData);

    res.status(200).json({
        message: 'Data received successfully.',
        received: userData
    });
});

app.get('/', (req, res) => {
    res.send('API is working!');
});

module.exports = app;
