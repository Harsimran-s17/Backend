const express = require('express')
const path = require('path')

const rootdir = require('../util/path');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    // res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button >Add</button></form>')

    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'))
})

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;