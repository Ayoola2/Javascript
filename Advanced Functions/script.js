const first = () => {    
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
// Everytime we run this fucntion, the block of code gets executed and the greet variable gets created everytime

const newFunc = first();
newFunc(); 

// Closures; what closure does is the child scope always has access to the parent scope
// closure is also a function ran. The function executed. It's never going to execute again
//BUT it's going to remeber that there are references to those variables so the
// child scope always has access to the parent scope

// Currying
const multiply = (a, b) => a * b; // currying means we're changing this function accept one parameter at a time
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)
const multiply5 = curriedMultiply(100); // this multiplies whatever is inputed by 100

// In the console it would be curriedMultiply(3)(4); which gives 12

//COMPOSE 
const compose = (f, g) => (a) => f(g(a)); // f isa fucntion and g is also a function

const sum = (num) => num + 1;

compose(sum, sum)(5);

// This simply means if both (f, g) are (sum, sum) and (a) is (5)

// Avoiding side effects, functional purity
