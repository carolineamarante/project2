const http = require('http'); 
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('middle of the night');
    next();
});

app.use((req, res, next) => {
    console.log('middle of the night 2')
    //...
});

app.listen(3000);