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

// o caminho vazio / precisa sempre ficar por ultimo na lista, caso contrário as outras paginas
// nunca serão executadas, isso por iniciarem com a /


app.listen(3000);
