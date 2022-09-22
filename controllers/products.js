const Product = require('../models/product')

exports.getProd = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Lojita', 
            path: '/'
        
        })
    })
};


exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, 
            pageTitle: 'Bem Vindito - Lojita', 
            path: '/'
        })
    })
}


exports.