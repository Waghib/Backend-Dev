const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hi this is a home page!');
});

app.get('/about', (req, res) => {
    res.send('This is about page!');
});

app.get('/contact', (req, res) => {
    res.send('This is contact page!');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});