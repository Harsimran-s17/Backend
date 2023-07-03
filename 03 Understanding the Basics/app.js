const http = require('http')               // Constant http can be renamed to any name which means we can give any name to constant on which we are importing http module

//.js is automatically added to the module name(Here : http)
// './' gives relative path ( means the path to current folder)
// '/' is for absolute path
// using require we can also import our own javascript files
// core modules are imported just by their name without indication any path

// RELATIVE AND ABSOLUTE PATH

// Traces the path from the current directory through its parent or its subdirectories and files.
// An absolute path name represents the complete name of a directory or file from the /(root) directory downward.

function reqListener(req, res){
    console.log(req);
    //process.exit();    //This function is used to terminate event loop so that our server stops running .
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Peter!</h1>')
    res.end();  // after this if we try to res.write, it will throw an error
}

const server = http.createServer(reqListener)

server.listen(3000);