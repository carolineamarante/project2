const product = []; 

exports.getAddProd = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Produtitos', 
        path:'/admin/add-product'
    })
};

exports.postAddProd = (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/')
};

exports.getProd = (req, res, next) => {
    res.render('shop', {
        prods: product, 
        pageTitle: 'Lojita', 
        path: '/'
    })
};



