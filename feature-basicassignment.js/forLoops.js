var prompt = require("prompt-sync")();
/*Write a program that takes a command-line argument n and prints a table of the 
powers of 2 that are less than or equal to 2^n.*/
  let n1 = parseInt(prompt("Enter the value of n (integer):"));
  console.log(`power\tvalue`);
  for (let i = 0; i < n1; i++) {
    let value = Math.pow(2, i);
    console.log(`${i}\t${value}`);
  }

/* Write a program that takes a command-line argument n and prints the nth harmonic 
number. Harmonic Number is of the form*/

  const n2 = parseInt(prompt("Enter a number:"));

  console.log(`Powers of 2 less than or equal to 2^${n2}:`);
  for (let i = 0; i <= n2; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
// Write a program that takes a input and determines if the number is a prime
  const n3 = parseInt(prompt("Enter a number:"));

  let harmonicNumber = 0;
  for (let i = 1; i <= n3; i++) {
    harmonicNumber += 1 / i;
  }
  console.log(`The ${n3}th harmonic number is: ${harmonicNumber}`);


  const num = parseInt(prompt("Enter a number:"));

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }



/* Extend the program to take a range of number as input and output the Prime 
Numbers in that range.*/
  const start = parseInt(prompt("Enter the starting number of the range:"));
  const end = parseInt(prompt("Enter the ending number of the range:"));

  if (start < 2) {
    console.log(
      "The starting number must be at least 2 to find prime numbers."
    );
    return;
  }

  console.log(`Prime numbers between ${start} and ${end}:`);

  for (let num = start; num <= end; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && num > 1) {
      console.log(num);
    }
  }


/*Write a program that computes a factorial of a number taken as input. 
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5*/
  let n = parseInt(prompt("Enter the number you want to find factorial of: "));
  let factNumber = 1;
  for (let i = 1; i <= n; i++) {
    factNumber *= i;
  }
  console.log(`Factorial of ${n} - ${factNumber}`);

/*Write a program to compute Factors of a number N using prime factorization method.
 Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
 O/P -> Print the prime factors of number N.*/

  let N = parseInt(prompt("Enter a number to find its prime factors:"));
  let factors = [];

  while (N % 2 === 0) {
    factors.push(2);
    N /= 2;
  }

  for (let i = 3; i * i <= N; i += 2) {
    while (N % i === 0) {
      factors.push(i);
      N /= i;
    }
  }

  if (N > 2) {
    factors.push(N);
  }

  console.log("Prime factors:", factors.join(", "));

