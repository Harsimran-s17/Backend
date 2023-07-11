const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//setting configration values globally
app.set('view engine', 'pug')       //  --> select  the template engine  pug    
app.set('views', 'views')             //--> enables express to where find our views


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
