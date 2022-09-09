const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Produtitos', 
        path:'/admin/add-product'
    })
};

exports.postAddProd = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
};

exports.getProd = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'Lojita', 
            path: '/'
        
        })
    })
};



