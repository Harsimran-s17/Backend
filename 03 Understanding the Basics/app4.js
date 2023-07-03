//Understanding code driven execution and blocking and non-blocking code

const http = require('http') ;
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<form action="/message" method="POST"><input type="text" name="message" ></input> <button>send</button></form>')
        return res.end(); // returning so that the following code should not be executed
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{         // req.on() is a event listener
            console.log(chunk);
            body.push(chunk);
        })

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            // res.statusCode = 302;
            // res.setHeader('Location', '/');  //-->Location is default header accepted by browser , and we set locaton to '/';
            // return res.end();
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');  //-->Location is default header accepted by browser , and we set locaton to '/';
                return res.end();
            })
        })
        //res.writeHead(302,{})  // --> 302 is status code for redirection, {} is object contains headers
        //OR
    }
    res.write("<h1>Hello Peter Puttar</h1>");
    res.end()
})

server.listen(3000)