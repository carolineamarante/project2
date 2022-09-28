const path = require('path');
const express = require('express');
const prodController = require('../controllers/shop')
const adminController = require('../controllers/admin')
const router = express.Router();



router.get('/add-product', adminController.getAddProd)

router.get('/admin-products', adminController.getProducts)

router.post('/add-product', adminController.postAddProd)

module.exports = router; 