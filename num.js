const prompt = require("prompt-sync")({signit:true});
let num = parseInt(prompt("Choose The Number"))
switch(num){
    case 1: console.log("One");
    break;
    case 10: console.log("Ten");
    break;
    case 100: console.log("Hundread");
    break;
    case 1000: console.log("Thusand");
    break;
    default: console.log("Invalid Input");
}