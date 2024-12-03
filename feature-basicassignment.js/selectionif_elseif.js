// Read a single digit number and write the number in word
var prompt =require('prompt-sync')();
function numberofwords(){
    const num=parseInt(prompt("Enter the number"));
    const numWords=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    console.log("The number in words: ", numWords[num]);
    
}
numberofwords();

//Read a Number and Display the week day (Sunday, Monday,…)
const numb=parseInt(prompt("Enter the number: "));
const numWeeks=["Sunuday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (numb>=0 && numb<7){
    console.log("The day is :" ,numWeeks[numb]);       
}
else{
    console.log("Invalid number ");        
}

// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
const number = parseInt(prompt("Enter a number:"));

if (number === 1) {
    console.log("Unit");
} else if (number === 10) {
    console.log("Ten");
} else if (number === 100) {
    console.log("Hundred");
} else if (number === 1000) {
    console.log("Thousand");
} else if (number === 10000) {
    console.log("Ten Thousand");
} else if (number === 100000) {
    console.log("Hundred Thousand");
} else {
    console.log("Number is not a valid unit, ten, hundred, thousand...");
}



/* Enter 3 Numbers do following arithmetic operation and find the one that 
is maximum and minimum
1.   a + b * c 
2.   a % b + c
3.    c + a / b
4.    a * b + c*/


const a = parseInt(prompt("Enter the value for a:"));
const b = parseInt(prompt("Enter the value for b:"));
const c = parseInt(prompt("Enter the value for c:"));

const result1 = a + b * c; 
const result2 = a % b + c; 
const result3 = c + a / b; 
const result4 = a * b + c;

console.log(`Results: 
1. a + b * c = ${result1} 
2. a % b + c = ${result2} 
3. c + a / b = ${result3} 
4. a * b + c = ${result4}`);

let max = result1;
if (result2 > max) {
    max = result2;
}
if (result3 > max) {
    max = result3;
}
if (result4 > max) {
    max = result4;
}

console.log("Maximum result:", max);

let min = result1;
if (result2 < min) {
    min = result2;
}
if (result3 < min) {
    min = result3;
}
if (result4 < min) {
    min = result4;
}

console.log("Minimum result:", min);
