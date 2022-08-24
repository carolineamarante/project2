const path = require('path');
const express = require('express');
const prodController = require('../controllers/products')
const routes = express.Router();


routes.get('/', prodController.getProd);

module.exports = routes;