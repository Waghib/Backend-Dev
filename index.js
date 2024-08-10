const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');


// app.get('/', (req, res) => {
//     // res.send('This is a home page');
// });


// static function allow us to serve static files
app.use(express.static(publicPath));


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});