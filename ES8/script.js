// string padding

'Turtle'.padStart(10); // This is more like padding in css; add 10 spaces to the start of turtle
'Turtle'.padEnd(10); // This is more like padding in css; add 10 spaces to the end of turtle

// Trailing commas in functions parameter lists and calls

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)

Object.values
Object.entries
Object.keys  // allows us do something similar to arrays but on objects

let obj = {
    username0: 'Santa',
    username1: 'Claus',
    username2: 'Christmas',
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
    
})