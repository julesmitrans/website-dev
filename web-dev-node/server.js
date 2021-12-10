const express = require('express');
const app = express();
require('./services/tweets-service')(app)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});



app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000);

