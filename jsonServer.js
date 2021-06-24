var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {

    if(req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstName: 'John',
            lastName: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }

    else if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else{
        res.writeHead(404);
        res.end("404 Page not Found");
    }

    

}).listen(1337, '127.0.0.1'); 