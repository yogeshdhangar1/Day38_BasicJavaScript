const prompt=require("prompt-sync")({sigint:true});
let n = parseInt(prompt("Enter The Number"));
if(n==1)
console.log("One");
else if(n==10)
console.log("Ten");
else if (n==100)
console.log("Hundred");
else if(n==1000)
console.log("Thousand");
