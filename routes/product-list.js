const path = require('path');
const express = require('express');
const shopController = require('../controllers/shop')

const routes = express.Router();


routes.get('/', shopController.getIndex);

routes.get('/products', shopController.getProd)

routes.get('/cart', shopController.getCart)

routes.get('/checkout', shopController.getCheckout)

module.exports = routes;