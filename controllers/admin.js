const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('admin/product-list', {
        pageTitle: 'Add Produtitos', 
        path:'/admin/add-product'
    })
};

exports.postAddProd = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/add-products', {
            prods: products, 
            pageTitle: 'Admin Produtitos', 
            path: '/admin/admin-products'
        })
    })
}