document.getElementById('questionForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const question = document.getElementById('question').value;
    document.getElementById('answer').innerText = 'Loading...';

    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        const data = await response.json();
        document.getElementById('answer').innerText = data.answer;
    } catch (error) {
        document.getElementById('answer').innerText = 'Sorry, something went wrong!';
    }
});

const response = await fetch('http://localhost:3000/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
});
