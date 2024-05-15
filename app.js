// app.js
const express = require('express');
const path = require('path');
const spinRoulette = require('./roulette_logic');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/spin', (req, res) => {
    const [number, color] = spinRoulette();
    res.json({ number, color });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
