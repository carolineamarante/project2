const Product = require('../models/product')

exports.getAddProd = (req, res, next) => {
    res.render('admin/admin-product-list', {
        pageTitle: 'Add Produtitos', 
        path:'/admin/add-product'
    })
};

exports.postAddProd = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
};