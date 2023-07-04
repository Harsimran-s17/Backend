const fs = require('fs');

const requestHandler = (req, res) =>{
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
             
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/'); 
                return res.end();
            })
        })
    }
    res.write("<h1>Hello Peter Puttar</h1>");
    res.end()
}

// module.exports = requestHandler;

//OR (when we have to export multiple items)

module.exports = {
    handler: requestHandler,
    SomeText: "Hey! There"
}

//OR

// module.exports.handler = requestHandler;
// module.exports.SomeText = "Hey! There";

//OR

// exports.handler = requestHandler;
// exports.SomeText = "Hey! There";