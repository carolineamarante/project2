const Product = require('../models/product')

exports.getProd = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products, 
            pageTitle: 'Lojita', 
            path: '/products'
        
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


exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Carrito'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle:'Hora do Pagamentito'
    })
}