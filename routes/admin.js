const path = require('path');
const express = require('express');
const rootDir = require('../utility/path');
const router = express.Router();


const product = []; 


router.get('/add-product',(req, res, next) => {
        res.render('add-product', {pageTitle: 'Add Produtitos'})
});

router.post('/add-product', (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/');

});


exports.routes = router;
exports.products = product; 