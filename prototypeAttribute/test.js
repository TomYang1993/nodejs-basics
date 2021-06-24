function create(proto) {
        var temp = new Object();
        temp.__proto__ = proto;
    
        return temp;
}


function Sub(){
    this.name = 'a';
}

var test = create(Sub);
console.log(test.prototype.constructor);

console.log(Object.getPrototypeOf(Sub) == Function.prototype);


var temp = new Object();
console.log(temp)
console.log(Object.getPrototypeOf(temp) === Object.prototype);