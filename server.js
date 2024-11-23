const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));  // Serve the frontend from the "public" folder

// Route to handle user questions
app.post('/ask', async (req, res) => {
    const { question } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: question,
            max_tokens: 100,
        }, {
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`,  // Replace with your OpenAI API key
            },
        });

        const answer = response.data.choices[0].text.trim();
        res.json({ answer });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting AI response');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
