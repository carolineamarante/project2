
const path = require('path');
const express = require('express');
const send404 = require('./controllers/404');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/product-list');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  'public')));

//calling pages
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//use - lida com qualquer metodo http 

app.use(send404.get404);

app.listen(3000);
