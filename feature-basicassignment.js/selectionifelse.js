//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
var prompt = require('prompt-sync')();

let numbers = [];

let min = 1000; 
let max = 0;

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNumber);

    if (randomNumber < min) {
        min = randomNumber;
    } else if (randomNumber > max) {
        max = randomNumber;
    }
}

console.log("Random 3-digit values:", numbers);
console.log("Minimum value:", min);
console.log("Maximum value:", max);

//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise
const day = parseInt(25);
const month = parseInt(5);
if ((month === 3 && day >= 20) || (month >= 4 && month <= 5) || (month === 6 && day <= 20)) {
    console.log(true);
} else {
    console.log(false);
}

//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
const year = parseInt(prompt("Enter a year: "));

if (isLeapYear(year)) {
    console.log(`${year} is a Leap Year.`);
} else {
    console.log(`${year} is not a Leap Year.`);
}


//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let flip = Math.random() < 0.5 ? "Heads" : "Tails";

console.log(flip);

