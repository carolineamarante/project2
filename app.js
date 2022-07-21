const http = require('http'); 
const express = require('express');

const app = express();

app.use('/produtinho',(req, res, next) => {
    console.log('middle of the night 2')
    res.send('aqui voce vende produtinho')
});

app.use('/', (req, res, next) => {
    console.log('middle of the night 2')
    res.send('pipipi popopo')
});

app.listen(3000);