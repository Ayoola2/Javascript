function sayHello() {
    console.log("Hello there!");
}

sayHello();

// OR

var sayBye = function() {
    console.log('Bye');
}

sayBye(); // This is an anonymous function 

// ------------ 

function sing(song) {
    console.log(song);
}

sing("Hallelujahhh!!!!");
sing("Sing Praises");

function multiply(a, b) {
   return a * b; // This will return the value of a * b
}

alert(multiply(5, 10));

function checkDriverAge() {

    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

