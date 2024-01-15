var todoList = [
    "Clean Shoes",
    "Practice Javascript",
    "Watch football",
    "Eat healthy",
    "Exercise"
];

//to do a loop

for (var i=0; i < todoList.length; i++) {
    todoList[i] = todoList[i] + "!"
}
// so what this is saying is the loop starts off with 0 and as long as i < 5 then run whatever is in the code block and once its done, add 1 to i)

//we can also perform other actions
var todoLength = todoList.length; // This is added so that items are wrongly deleted
for (var i=0; i < todoLength; i++) {
    todoList.pop();
}

// WHILE LOOP
var counterOne = 0;
while(counterOne < 10) {
    console.log(counterOne);
    counterOne++
}

// DO LOOP
var counterTwo = 10
do{
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);


