

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }    

    greet() {
        console.log('hello ' + this.firstName);
    }

}

var john = new Person('John', 'Doe');

john.greet();