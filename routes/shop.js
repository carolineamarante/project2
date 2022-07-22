const path = require('path');
const express = require('express');
const routes = express.Router();


/*
neste caso, como o routes está com o get, ao invés de use, o redirecionamento da pág vai funcionar normal
porque só vai pegar files que contenham um GET, se usasse o routes.use, aí sim a ordem iria fazer diferença no 
arquivo app.js. 

USE - a ordem das rotas importa
GET - tanto faz a ordem, ele vai funcionar certinho
*/
routes.get('/', (req, res, next) => {
    res.send('Pagina Principal que cuida do /');
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'))
});

module.exports = routes;