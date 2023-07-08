const express = require('express');
const path = require('path')

const rootdir = require('../util/path')
const router = express.Router();


router.get("/", (req,res,next)=>{
    // res.send('<h1>Hello from Express!</h1>')

    //SENDING ABOVE HTML CODE AS FILE

    // res.sendFile('/views/shop.html');  ---> throw an error for wrong path because after root '/' directory the path doesn't match and we can't use relative path

    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
})

module.exports = router;