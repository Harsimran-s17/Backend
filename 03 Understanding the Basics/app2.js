// ROUTING REQUESTS

const http = require('http') 

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.write('<form action="/message" method="POST"><input type="text" name="message" ></input> <button>send</button></form>')
        return res.end(); // returning so that the following code should not be executed
    }

    res.write("<h1>Hello Peter Puttar</h1>");
    res.end()
})

server.listen(3000)