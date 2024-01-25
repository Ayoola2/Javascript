// reference type
// Objects are what is called the reference types in javascript

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context . It gets confused a lot with scope and it tells you where you are within the object

const object4 = {
    a: function() {
        console.log(this);
    }
}


// instantiation is when you make a copy of an object and reuse the code
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player { // This simply means we want wizard to extend whatever player has
    constructor(name, type) {  // Anytime we extend something, we need to also call the 'constructor' fucntion of the 'player'
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('shelly', 'witcher');
const wizard2 = new Wizard('Kent', 'Healer');
