const path = require('path');
const express = require('express');
const prodController = require('../controllers/products')
const routes = express.Router();


routes.get('/', prodController.getIndex);

routes.get('/products', prodController.getProd)

routes.get('/cart')

routes.get('/checkout')

module.exports = routes;