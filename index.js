const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    
    if(!req.query.age)
    {
        return res.send('Please provide age');
    }
    else if (req.query.age < 18)
    {
        return res.send('You are not allowed to visit this page');
    }
    else
    {
        next();
    }

};

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page');
});

app.get('/users', (req, res) => {
    res.send('Welcome to users page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});