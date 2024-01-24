// Destructuring

const obj = {
    player: "Ayo",
    experience: "intermediate",
    jsLevel: false
}

// To access this, we do this

// const player = obj.player;
// const experience = obj.experience;
// let jsLevel = obj.jsLevel;

// But with destructuring, we can do this instead

const { player, experience } = obj; // Now you have const player and experience available to you
let { jsLevel } = obj;

// Another way of declaring object properties

const name = "breadman";

const ob = {
    [name]: 'hello',
    ['Ayo' + 'Abiola']: 'Hi'
}

const a = "Simon"
const b = true;
const c = {};

const abc = {
    ab,c
}

// Template strings

const greeting = "Hello " + " how are you doing today? " + "!" 

// instead of doing the above, we can do this instead

// const greetingNew = ``

//Suppose we have 

const firstName = "Bellingham";
const age = 38;
const pet = "Dog";

const greetingNew = `Hello Mr ${firstName} you are ${age} years old and you have a pet ${pet}`

// Default arguments

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age}. What a lovely ${pet} you got there`

}

// SYMBOL

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('buu');

// symbols are used because they create a completely unique type, symbols are rarely used though

// ARROW FUNCTIONS

function add(a,b) {
    return a + b;
}

// No we can do this instead

const add = (a, b) => a + b; // This is the shorthand method of writing a function
