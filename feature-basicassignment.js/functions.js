var prompt = require('prompt-sync')();

function convertT(deg, type) {
    let result;
    if (type === "C_TO_F") {
        result = (deg * 9/5) + 32;
        console.log(`${deg}C = ${result}F`);
        return result;
    } else if (type === "F_TO_C") {
        result = (deg - 32) * 5/9;
        console.log(`${deg}F = ${result}C`);
        return result;
    } else {
        console.log("Invalid type");
        return null;
    }
}
convertT(32, "C_TO_F");

function checkPalindrome(str) {
    let result = (str === str.split("").reverse().join(""));
    console.log(result);
    return result;
}

function palindromicPrime() {
    let num = parseInt(prompt("Enter the Number: "));
    function prime(num) {
        if (num < 2) return false;
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    if (checkPalindrome(num.toString()) && prime(num)) {
        console.log(`${num} is a palindromic prime`);
    } else if (!checkPalindrome(num.toString())) {
        console.log(`${num} is not a palindrome`);
    } else {
        console.log(`${num} is a palindrome but not prime`);
    }
}

palindromicPrime();
