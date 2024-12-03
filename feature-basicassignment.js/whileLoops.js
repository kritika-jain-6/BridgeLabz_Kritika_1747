var prompt = require("prompt-sync")();
/* Write a program that takes a command-line argument n and prints a 
table of the powers of 2 that are less than or equal to 2^n till 256 is 
reached.*/
  let n = parseInt(prompt("Enter the value of n (integer):"));

  console.log("Power   Value");

  let i = 0;
  while (i <= n) {
    let value = Math.pow(2, i);
    if (value > 256) break;

    console.log(`${i}\t${value}`);
    i++;
  }


/* Find the Magic Number
 a. Ask the user to think of a number n between 1 to 100
 b. Then check with the user if the number is less then n/2 or greater
 c. Repeat till the Magic Number is reached.*/
  console.log("think number between 1 t0 100");

  let low = 1;
  let high = 100;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    let res = prompt(`Is your number greater than ${mid}? (yes/no):`);

    if (res === "yes") {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  console.log(`The magic number is ${low}!`);
//Extend the Flip Coin problem till either Heads or Tails wins 11 times. 
  //var prompt = require('prompt-sync')();

function flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

function flipCoinUntilWin() {
    let headsCount = 0;
    let tailsCount = 0;

    while (headsCount < 11 && tailsCount < 11) {
        let result = flipCoin();
        console.log(result);

        if (result === 'Heads') {
            headsCount++;
        } else {
            tailsCount++;
        }

        console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
    }

    if (headsCount === 11) {
        console.log("Heads wins!");
    } else {
        console.log("Tails wins!");
    }
}

flipCoinUntilWin();


/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet 
until he/she goes broke i.e. no more money to gamble or reaches the 
goal of Rs 200. Keeps track of number of times won and number of bets 
made. */
  let money = 100;
  let goal = 200;
  let betsMade = 1;
  let wins = 1;

  while (money>0 && money<goal) {
    betsMade++;

    let win = Math.random() <0.5;

    if(win){
      money += 1;
      wins++;
    }else{
      money -= 1;
    }
  }

  if (money >= goal) {
    console.log(`Congratulations! You reached your goal of Rs ${goal}.`);
} else {
    console.log("You went broke! Better luck next time.");
}

console.log(`Total bets made: ${betsMade}`);
console.log(`Total wins: ${wins}`);


