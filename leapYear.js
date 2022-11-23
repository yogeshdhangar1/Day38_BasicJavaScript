const prompt=require("prompt-sync")({sigint:true});
let y = parseInt(prompt("Enter The Year"))
if(y%100==0)
console.log("Its Leap Year:"+y)
else
console.log("Not Leap year:"+y)