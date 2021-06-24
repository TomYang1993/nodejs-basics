'use strict';

// basic require use case
var greetings = require('./greet/greetings.json')
var greet = require('./greet');
var eventConfig = require('./eventConfig').events;

greet.english(greetings.en);

//simple version event emitter
var Emitter = require('./eventEmitterSimple/emitter');
var emitter = new Emitter();

emitter.on(eventConfig.DATA, function(){
    console.log("get data form back end!")
})
emitter.on(eventConfig.END, function(){
    console.log("ends tranmitting data!")
})

emitter.emit(eventConfig.DATA);

//native module event emitter
var emitConstructor = require('events')
var emtr = new emitConstructor();

emtr.on(eventConfig.END, function(){
    console.log("ends tranmitting data in complicated version!")
})

emtr.emit(eventConfig.END);


//inherit from eventEmitter
var util = require('util');

function Trans() {
    //this call method has to be at first
    //override this keyword's properties
    //complete inheritance is from here

    emitConstructor.call(this);
    this.prop = "You know nothing!";
}

//
util.inherits(Trans, emitConstructor);

var transmitter = new Trans();

transmitter.on(eventConfig.END, function(){
    console.log("info from the trans subclass!")
});

transmitter.emit(eventConfig.END);


//call back function, ultimate

function getData(params, cb){
    console.log("it is calling the callback");
    console.log(params);
    cb();
}

getData("sun", function(){
    console.log("sun is uprising!")
})



var stringLite = "asdf";
console.log(stringLite.slice(3,6) + "fen");
