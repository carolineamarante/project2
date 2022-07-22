//calling functions
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: true}));

//calling pages
app.use(adminRoutes);
app.use(shopRoutes);

//use - lida com qualquer metodo http 

app.use((req, res, next) => {
   res.status(404).send('<h2>Page not found</h2>') 
});

app.listen(3000);
