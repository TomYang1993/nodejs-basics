var buf = new Buffer('Hello', 'utf8');

console.log(buf);

console.log(buf[2]);

console.log(buf.toString());

console.log(buf.toJSON());

buf.write('wo')

console.log(buf.toString());


//ES6 typed array, v8 engine original method 
//to deal with binary raw data

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);

view[0] = 2536;
view[1] = 23573568467;

console.log(view);