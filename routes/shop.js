const path = require('path');
const express = require('express');
const routes = express.Router();

const rootDir = require('../utility/path');
const adminData = require('./admin');


/*
neste caso, como o routes está com o get, ao invés de use, o redirecionamento da pág vai funcionar normal
porque só vai pegar files que contenham um GET, se usasse o routes.use, aí sim a ordem iria fazer diferença no 
arquivo app.js. 

USE - a ordem das rotas importa
GET - tanto faz a ordem, ele vai funcionar certinho
*/
routes.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Lojita', path: '/'});
});

module.exports = routes;