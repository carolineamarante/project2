//calling functions
const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

//routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,  'public')));

//calling pages
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//use - lida com qualquer metodo http 

app.use((req, res, next) => {
   res.status(404).render('404', {pageTitle: '404 - Page Not Found'})
});

app.listen(3000);
