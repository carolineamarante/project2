const path = require('path');
const express = require('express');
const prodController = require('../controllers/products')
const router = express.Router();



router.get('/add-product', prodController.getAddProd)

router.post('/add-product', prodController.postAddProd)

module.exports = router; 