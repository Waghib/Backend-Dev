const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');


app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});