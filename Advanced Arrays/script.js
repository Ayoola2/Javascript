// Advanced Arrays

const array = [1, 2, 3];

const double = []
const newArray = array.forEach (num => {
    double.push(num * 2);
})

console.log('forEach', newArray);

//Map filter and reduce; the most importants methods that will be used in day to day javascript

//Map

const mapArray = array.map(num => num * 2);     // The way map works is that you always need to return something, the code was written in short form because its a single line

console.log('Map', mapArray);

// forEach and Map seem to be doing the same thing but there is a critical difference between the two
// with forEach you can have multiple lines of code but with map you always have a return element

// Filter

const filterArray = array.filter(num => num > 5);

console.log('Filter', filterArray)


// Reduce; you can actually do filtering and mapping with reduce

const reduceArray = array.reduce((accumulator, num) => {    //accumulator is something where we can store the information that happens in the body of the function
   return accumulator + num; 
}, 5);

console.log('reduce', reduceArray);

