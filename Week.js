const prompt = require("prompt-sync")({signit:true});
let num = parseInt(prompt("Choose The Number"))
switch(num){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wenesday");
    break;
    case 4: console.log("Thurday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Invalid Input");
}