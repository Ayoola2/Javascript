// var h1 = document.querySelector("h1");   
// h1.className = "cool-title"

// h1.innerHTML = "<strong>DOM</strong>";

// document.querySelectorAll("li")[1].parentElement; // This brings the <ul>

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("Click!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    if(inputLength() > 0) { // This logic here allows this code to run only in the input value is greater than zero
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; // this prevents repition of user inputs
    }
}

function addListAfterClick() {
    if(inputLength() > 0) { // This logic here allows this code to run only in the input value is greater than zero
        createListElement();
    }
}

function addListAfterKeypress() {
    if(inputLength() > 0 && event.keycode === 13) { 
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

//To allow users press enter on keyboard for automatic input instead of hovering on enter

button.addEventListener("keypress", addListAfterKeypress);

