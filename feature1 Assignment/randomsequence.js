//Random Function Math.floor(Math.random() * 10); to get Single Digit. 
let randomnum=Math.floor(Math.random()*10);
console.log(randomnum);

//Use Random to get Dice Number between 1 to 6
let dicenum=Math.floor((Math.random()*6)+1);
console.log(dicenum);

//Add two Random Dice Number and Print the Result
const num1=Math.floor((Math.random()*6)+1);
const num2=Math.floor((Math.random()*6)+1);
const res=num1+num2;
console.log(res);

//Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sum=0;
let number=[];
for (let i=0;i<5;i++){
    let randomnum=Math.floor((Math.random()*90)+10);
    number.push(randomnum);
    sum+=randomnum;
}
let avg=sum/number.length;
console.log(number);
console.log(sum);
console.log(avg.toFixed(2));

//Write a program of unit conversion

const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * 0.3048;
const widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft`);
console.log(`In Meters: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);

const areaInFeet = lengthFeet * widthFeet; 
const totalAreaInFeet = areaInFeet * 25; 
const areaInAcres = totalAreaInFeet / 43560; 
console.log(`Area of 25 plots in acres: ${areaInAcres.toFixed(2)} acres`);

