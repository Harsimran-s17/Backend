const express = require('express')

const router = express.Router();

router.get('/addProduct',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button >Add</button></form>')
})

router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;