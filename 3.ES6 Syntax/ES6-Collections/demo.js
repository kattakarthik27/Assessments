const readline = require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let userInput = " ";

r1.question("What is your Name\n", function(string){
    userInput = string;
    console.log("Your Name is: "+userInput);
    r1.close();
});