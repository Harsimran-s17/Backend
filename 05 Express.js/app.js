//Importing and Exporting

const  express = require('express');
const bodyParser = require('body-parser');

const app = express();


// app.get('/addProduct',(req,res,next)=>{
//     res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button >Add</button></form>')
// })

// app.post("/product",(req,res,next)=>{
//     console.log(req.body);
//     res.redirect("/");
// })

// app.get("/", (req,res,next)=>{
//     res.send('<h1>Hello from Express!</h1>')
// })


// Alternate for above code below:


const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended : false}));

app.use(adminRoutes)

app.use(shopRoutes)

app.use((req,res, next)=>{
    // res.send('<h1>Page not found</h1>')    ----> this will give error code 304 (check in network inspection)
    res.status(404).send('<h1>Page not found</h1>')
})



// const server = http.createServer()

// server.listen(3000)

app.listen(3000);