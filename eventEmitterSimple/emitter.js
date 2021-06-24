
function Emitter() {
    this.events = {};
}

//simple version, basic implementation of event emitter

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]){
        this.events[type].forEach(listener => listener());
    }
}

module.exports = Emitter;