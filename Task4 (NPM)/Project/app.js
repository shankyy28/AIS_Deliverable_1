const express = require('express');

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Index page');
});

app.get('/dashboard',(req, res) => {
    res.send('Greetings');
})

app.listen(PORT, () => {
    console.log('Server is listening');
});