const prompt=require("prompt-sync")({sigint:true});
let n = parseInt(prompt("Enter The Number"));
if(n==1)
console.log("sunday");
else if(n==2)
console.log("monday");
else if (n==3)
console.log("Tuesday");
else if(n==4)
console.log("Wenesday");
else if(n==5)
console.log("Thurday");
else if(n==6)
console.log("Friday");
else if (n==7)
console.log("Saturday");