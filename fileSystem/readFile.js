var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

 console.log(greet);

//error-first callback function

 var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){
        console.log(data);
 })

