// user will enter numbers
let fn = prompt("ENTER FIRST NUMBER: ");
let sn = prompt("ENTER SECOND NUMBER:");

//this will convert into numbers from strings
fn = Number(fn);
sn = Number(sn);

//Addition
let sum = fn + sn;
alert("Addition: " + sum);
console.log("Addition: " + sum);

//Subtraction
let minus = fn - sn;
alert("Subtraction: " + minus);
console.log("Subtraction " + minus);

//Multiplication
let multiply = fn * sn;
alert("Multiplication: " + multiply);
console.log("Multiplication: " + multiply);

//Division
let divide = fn / sn;
alert("Division: " + divide);
console.log("Division: " + divide);
