let obj1 = {name: 'Ayo', password: '1234'};
let obj2 = obj1;

obj2.password = "easypeasy"

console.log(obj1)
console.log(obj2)

//another example

var c = [1,2,3,4,5];
var d = [].concat(c); // This clones the array c in such a way that it does not add '7878340' to c 
d.push(27878340);
console.log(d)

var a = 5;
var b = 10;

b++;

let obj = {
    a: 'a',
    b:'b', 
    c: {deep: 'Try and copy me'}
};
    
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c = 10;
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);