const { count } = require('console');
const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'abc@test.com',
        country: 'USA',   
        skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'MongoDB'],
    }
    res.render('profile', {user});
});

app.get('/login', (req, res) => {
    res.render('login');
});

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