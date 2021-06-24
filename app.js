var moment = require('moment');

console.log(moment().format("ddd, hA"));


var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('Request URL: ' + req.url);
    next();
})

app.get('/', function(req, res, next){
    res.render('index');
})

// app.get('/', function(req, res){
//     res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World</h1></body></html>')
// })

// app.get('/person/:id', function(req, res){
//     res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>' + req.params.id + '</h1></body></html>')
// })

app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, queryStr: req.query.qstr});
})

app.post('/person', urlencodedParser, function(req, res){
    res.send('THX!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})



//port number will be different in local, production environment etc.
//so we need environment variables to adapt to changes
app.listen(port);


