var database = [ 
    {
        username: "Ayoola",
        password: "Abiola"
    },
    {
        username: "James",      //Here we have a database with 3 usernames and their respective passwords
        password: "1234"
    },
    {
        username: "Breadman",
        password: "777"
    }
]; 

var newsFeed = [
    {
        username: "Oreoluwa",
        timeline: "Today is great day" //Here we have the newsfeed which displays in the console if the user enters the correct username and password
    },
    {
        username: "Drake",
        timeline: "Javacript is so cool"
    }
];



function isUserValid(user, pass){
    for (var i=0; i < database.length; i++){
        if(database[i].user === user && database[i].pass === pass ){ // This checks if the user enters the correct username and password in the database
            return true;
        } 
    } 
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)){
        console.log(newsFeed);
    }
    else {
         alert("Wrong username or password");
    }
};

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

signIn(userNamePrompt, passwordPrompt)