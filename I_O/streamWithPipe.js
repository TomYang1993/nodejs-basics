var fs = require('fs');

var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt')

readable.pipe(writable);

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

var gzip = zlib.createGzip();

//gzip is a stream, not a particular file stream

readable.pipe(gzip).pipe(compressed);