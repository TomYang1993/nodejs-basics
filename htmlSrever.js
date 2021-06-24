var fs = require('fs');
var http = require('http');


http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    //basic concept about building a template
    //manipulating the response before it is sent to 
    //the client
    var message = "Hello, Tom!";
    html = html.replace('{Message', message);

    //use stream
    //fs.createReadStream(__dirname + '/index.html').pipe(res);
    //if you still want the template to work, then you may
    //need to write a custom stream

    res.end(html);

}).listen(1337, '127.0.0.1'); 

