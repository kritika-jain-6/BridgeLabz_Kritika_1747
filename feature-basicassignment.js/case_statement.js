// Read a single digit number and write the number in word using Case
var prompt = require('prompt-sync')();
const num = parseInt(prompt("Enter a single digit number:"));

switch(num) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Please enter a valid single digit number between 0 and 9.");
}

// Read a Number and Display the week day (Sunday, Monday,…)

const dayNumber = parseInt(prompt("Enter a number :"));

switch(dayNumber) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input! ");
}

// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
const unitnumber=parseInt(prompt("Enter the number: "));
switch(unitnumber){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Hundred Thousand");
        break;
    default:
        console.log("Invalid input! ");
}

/*Write a program that takes User Inputs and does Unit Conversion of 
different Length units
 1.   Feet to Inch 
2.   Feet to Meter
 3.    Inch to Feet
 4.    Meter to Fee*/
 const conversionType = parseInt(prompt("Select the type of conversion: \n1. Feet to Inch \n2. Inch to Feet \n3. Feet to Meter \n4. Meter to Feet"));

 switch(conversionType) {
     case 1:
         const feet = parseFloat(prompt("Enter the length in feet:"));
         const feetToInch = feet * 12;
         console.log(`${feet} feet is equal to ${feetToInch} inches.`);
         break;
         
     case 2:
         const inch = parseFloat(prompt("Enter the length in inches:"));
         const inchToFeet = inch / 12;
         console.log(`${inch} inches is equal to ${inchToFeet} feet.`);
         break;
         
     case 3:
         const feetToMeter = parseFloat(prompt("Enter the length in feet:")) * 0.3048;
         console.log(`${feetToMeter} meters.`);
         break;
         
     case 4:
         const meter = parseFloat(prompt("Enter the length in meters:"));
         const meterToFeet = meter / 0.3048;
         console.log(`${meter} meters is equal to ${meterToFeet} feet.`);
         break;
         
     default:
         console.log("Invalid selection. Please choose a number between 1 and 4.");
 }