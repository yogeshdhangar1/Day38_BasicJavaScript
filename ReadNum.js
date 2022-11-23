const prompt = require("prompt-sync")({signit:true});
let num = parseInt(prompt("Choose The Number"))
switch(num){
    case 1: console.log("One");
    break;
    case 2: console.log("Two");
    break;
    case 3: console.log("Three");
    default: console.log("Invalid Output");
}