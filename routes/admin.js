const path = require('path');
const express = require('express');
const rootDir = require('../utility/path');
const router = express.Router();


const product = []; 


router.get('/add-product',(req, res, next) => {
        res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/admin/add-product');

});


exports.routes = router;
exports.products = product; 