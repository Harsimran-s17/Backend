//Importing and Exporting

const http = require('http') ;

const requestHandler = require('./routes')

const server = http.createServer(requestHandler.handler)

server.listen(3000)