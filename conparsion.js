// 1. Equality Operators
console.log("Equality Operators:");
console.log(5 == "5");         // true (loose equality, type coercion)
console.log(5 === "5");        // false (strict equality, no type coercion)
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (strict comparison)
console.log(0 == false);       // true (type coercion)
console.log(0 === false);      // false (strict comparison)
console.log(5 != "5");         // false (loose inequality, type coercion)
console.log(5 !== "5");        // true (strict inequality)

console.log("\n");

// 2. Relational Operators
console.log("Relational Operators:");
console.log(10 > 5);           // true
console.log(10 >= 10);         // true
console.log(5 < 10);           // true
console.log(5 <= 5);           // true
console.log("apple" > "banana"); // false (lexicographical comparison)
console.log("Zebra" < "apple"); // true (uppercase < lowercase)

console.log("\n");

// 3. Mixed Type Comparisons
console.log("Mixed Type Comparisons:");
console.log("5" > 4);          // true ("5" coerced to 5)
console.log(true == 1);        // true (true coerced to 1)
console.log(false == 0);       // true (false coerced to 0)
console.log(null > 0);         // false (null is not coerced)
console.log(null == 0);        // false (no coercion here)
console.log(null >= 0);        // true (special case)

console.log("\n");

// 4. Special Cases
console.log("Special Cases:");
console.log(NaN == NaN);       // false (NaN is not equal to itself)
console.log(Object.is(NaN, NaN)); // true (Object.is handles NaN properly)
console.log(-0 === 0);         // true (-0 and 0 are considered equal)
console.log(Object.is(-0, 0)); // false (Object.is distinguishes -0 and 0)

console.log("\n");

// 5. Truthy and Falsy in Comparisons
console.log("Truthy and Falsy Comparisons:");
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean([]));      // true (empty array is truthy)
console.log(Boolean({}));      // true (empty object is truthy)

if ("Hello") console.log("Truthy!"); // Executes because "Hello" is truthy
if (0) console.log("Falsy!");        // Does not execute because 0 is falsy
if (!0) console.log("0 is falsy!");  // Executes because 0 is falsy
