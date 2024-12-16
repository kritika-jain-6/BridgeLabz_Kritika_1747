function numberfromOnetoten(){
    let num=10;
    for(let i=1;i<=num;i++){
        console.log(i);    
    }
    }
    //numberfromOnetoten();
    
    function oddnumber(){
    let num=100;
    for(let i=1;i<num;i++){
        if(i%2!==0){
            console.log(i);        
        }
    }
    for(let i=1;i<num;i+=2){
        console.log(i);    
    } 
    }
    //oddnumber();
    
    function tableof7(){
        let num=7;
        for(let i=1;i<=10;i++){
            console.log(`7 X ${i}=${7*i}`);
        }
    }
    //tableof7();
    
    function tableofonetoten(){
        for(let i=1;i<=10;i++){
            for(let j=1;j<=10;j++){
                console.log(`${i}X${j}=${i*j}`);
            }
        }
    }
    //tableofonetoten();
    
    function sumonetoten(){
        let sum=0;
        for(let i=1;i<=10;i++){
            sum+=i;
        }
        console.log(sum);
    }
    //sumonetoten();
    
    function factorialoften(){
        let factor=1;
        for(let i=1;i<=10;i++){
            factor*=i;
        }
        console.log(factor);
    }
    //factorialoften();
    
    function sumofevennumber(){
        let sum=0;
        for(let i=12;i<30;i+=3){
            sum+=i;
        }
        console.log(sum);
    }
    //sumofevennumber();
    
    function convertCtoF(){
        let celsuis=25;
        console.log(`${(celsuis*9)/5+32}F`);
    }
    //convertCtoF();
    
    function convertFtoC(){
        let Fah=99;
        console.log(`${(((Fah-32)*5)/9).toFixed(2)}C`);
    }
    //convertFtoC();
    
    function suminarray(){
        let arr=[1,3,5,7,9];
        let sum=0;
        for(let elem of arr){
            sum+=elem;
        }
        console.log(sum);    
    }
    //suminarray();
    
    function avgofarray(){
        let arr=[1,3,5,7,9];
        let sum=0;
        for(let elem of arr){
            sum+=elem;
        }
        console.log(sum/arr.length);
    }
    //avgofarray();
    
    function positivenumber(){
        const arr=[-2,-4,-6,8,1,3,6,9];
        const res=[];
        for(let ele of arr){
            if(ele>=0){
                res.push(ele);
            }
        }
        console.log(res);
    }
    // positivenumber();
    
    function maxofarray(){
        const arr=[1,3,5,7,9];
        console.log(Math.max(...arr));    
    }
    //maxofarray()
    
    function fibwithoutrec(){
        let n1=0;
        let n2=1;
        let next;
        for(let i=1;i<=10;i++){
            next=n1+n2;
            n1=n2;
            n2=next;
            console.log(n1);
        }
    }
    //fibwithoutrec();
    
    function fibwithrec(n){
        if(n<=1){
            return 1;
        }
        return fibwithrec(n-1)+fibwithrec(n-2);
    }
    //console.log(fibwithrec(8));
    
    function isPrime(n) {
        
        for (let i = 2; i < n; i++) {
          if (n % i === 0) {
            //console.log(false);
            return false;
          }
        }
        //console.log(true);
        return true
    }
    //isPrime();
    
    function sumOfPositive(){
        let sum=0;
        const arr=[-1,-2,0,1,2,3];
        for(let ele of arr){
            if(ele>0){
                sum+=ele;
            }
        }
        console.log(sum);
    }
    //sumOfPositive();
    
    function first100prime(){
        let res= "";
        for(let i=1;i<=100;i++){
            if(isPrime(i)){
                res+=i+ " ";
            }
        }
        console.log(res);
    }
    //first100prime();
    function greaterThanNPrime(p, n) {
        const result = [];
        let count = 0;
      
        while (count < p) {
          if (isPrime(n)) {
            result.push(n);
            count++;
          }
          n++;
        }
        log(result);
        return result;
    }
    //greaterThanNPrime
    
    function rotateArrLeft() {
        const arr = [1, 2, 3, 4, 5];
        const first = arr.shift();
        arr.push(first);
        log(arr);
    }
    //rotateArrLeft();
    
    function rorateArrRight() {
        const arr = [1, 2, 3, 4, 5];
        const last = arr.pop();
        arr.unshift(last);
        log(arr);
    }
    //rorateArrRight();
     
    function reversearray(){
        const arr=[1,3,5,7,9];
        for(let i=arr.length-1;i>=0;i--){
            console.log(arr[i]);        
        }
    }
    //reversearray()
    
    function reversestring(){
        const s = " my name is Kritika";
        console.log(s.split(" ").reverse().join(" "));
    }
    //reversestring()
    
    function mergetwoarray(){
        const arr1=[1,3,5,7,9];
        const arr2=[2,4,6,8];
        let res=arr2.concat(arr1)
        console.log(res);
    }
    //mergetwoarray();
    
    function uniqueNumbers(arr1, arr2) {
        const result = [];
        for (let ele of arr1) {
          if (!arr2.includes(ele)) {
            result.push(ele);
          }
        }
      
        for (let ele of arr2) {
          if (!arr1.includes(ele)) {
            result.push(ele);
          }
        }
        log(result);
        return result;
      }
    //console.log(uniqueNumbers());
      
      function firstArrElem(arr1, arr2) {
        const result = []
        for(let elem of arr1){
          if(!arr2.includes(elem)){
            result.push(elem)
          }
        }
        log(result)
        return result;
      }
      //console.log(firstArrElem());
      
      
      function distinctElements(arr) {
        const result = [];
        for (let ele of arr) {
          if (!result.includes(ele)) {
            result.push(ele);
          }
        }
        log(result);
        return result;
      }
      //console.log(distinctElements());
      
      
      function primeSumInArr(){
        let count = 0;
        let i =1;
        const result = []
        let sum = 0;
        while(count<=100){
          if(isPrime(i)){
            sum+=i;
            result.push(sum);
            count++;
          }
          i++;
        }
        log(result)
        return result;
      }
      //console.log(primeSumInArr());
      
      
      function printPrimeDistance() {
        let count = 0;
        let i = 1;
        let prevPrime = 0;
        let result = "";
        while (count <= 100) {
          if (isPrime(i)) {
            if (count !== 0) {
              result += `${i - prevPrime} `;
            }
            prevPrime = i;
            count++;
          }
          i++;
        }
        log(result);
      }
      //console.log(printPrimeDistance());
      
      
      function sumOfStringNums(){
        const num1 = "13476543";
        const num2 = "1347654324";
        
        log(parseInt(num1)+parseInt(num2))
      }
     // console.log(sumOfStringNums());
      
      
      function countWordsInText(text) {
        const words = text.trim().split(" ");
        log(words.length)
      }
     // console.log(countWordsInText());
      
      
      function capitalize(){
        let string = "what a problem!"
        let result = ""
      
        for(let word of string.split(" ")){
          result += word[0].toUpperCase() + word.substring(1) +" ";
        }
        log(result)
      }
    //console.log(capitalize());
    
    function sumOfStringNums(){
        const numString = "1,2,3,4,5,6";
        let sum = 0;
        for(let num of numString.split(",")){
          sum += parseInt(num);
        }
        log(sum)
      }
    //console.log(sumOfStringNums());
      
      function wordsInText() {
        const text = "this is text"
        const result = text.trim().split(" ")
        log(result)
        return result;
      }
     // console.log(wordsInText());
    
      function stringToChars(){
        const text = "this is text"
        const result = text.split("");
        log(result)
      }
    //console.log(stringToChars());
    
      function stringToAsciiArray() {
        const text = "this is text"
        const result = [];
        for (let i = 0; i < text.length; i++) {
          result.push(text.charCodeAt(i));
        }
        log(result);
        return result;
      }
     // console.log(stringToAsciiArray());
    
     function bubblesort(){
        const arr=[36,80,42,87,9];
        let n=arr.length;
        let temp;
        for(let i=0;i<n;i++){
            for(let j=0;j<n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
     }
     //console.log(bubblesort());
    
     // 41. Calculate distance between two points
    function distance(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    console.log(distance(1, 2, 4, 6)); // 5
    
    // 42. Check if two circles intersect
    function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
      const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      return dist <= (r1 + r2);
    }
    console.log(areCirclesIntersecting(0, 0, 3, 4, 0, 3)); // true
    
    // 43. Extract column from a 2D array
    function extractColumn(matrix, columnNumber) {
      return matrix.map(row => row[columnNumber]);
    }
    console.log(extractColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)); // [2, 5, 8]
    
    // 44. Convert binary string to number
    function binaryToNumber(binaryStr) {
      return parseInt(binaryStr, 2);
    }
    console.log(binaryToNumber("1010"));
    
    
    // 45. Sum of numbers in a jagged array
    function sumJaggedArray(arr) {
      let sum = 0;
      for (let item of arr) {
          sum += Array.isArray(item) ? sumJaggedArray(item) : item;
      }
      return sum;
    }
    console.log(sumJaggedArray([1, [2, 3], [4, [5]]])); 
    
    // 46. Find max in jagged array
    function maxInJaggedArray(arr) {
      let max = -Infinity;
      for (let item of arr) {
          max = Math.max(max, Array.isArray(item) ? maxInJaggedArray(item) : item);
      }
      return max;
    }
    console.log(maxInJaggedArray([1, [2, 3], [4, [10]]])); // 10
    
    // 47. Deep copy jagged array
    function deepCopyJaggedArray(arr) {
      return arr.map(item => (Array.isArray(item) ? deepCopyJaggedArray(item) : item));
    }
    console.log(deepCopyJaggedArray([1, [2, 3], [4, [5]]])); 
    
    // 48. Return longest word in string
    function longestWord(str) {
      return str.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
    }
    //console.log(longestWord("The quick brown fox jumps over the lazy dog")); // jumps
    
    // 49. Shuffle array of strings
    function shuffleArray(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    console.log(shuffleArray(["apple", "banana", "cherry", "date"])); // Shuffled output
    
    // 50. Unique random numbers from 1 to n
    function uniqueRandomNumbers(n) {
      const numbers = Array.from({ length: n }, (_, i) => i + 1);
      return shuffleArray(numbers);
    }
    console.log(uniqueRandomNumbers(5)); // Example: [3, 1, 5, 4, 2]
    
    // 51. Letter frequency in string
    function letterFrequency(str) {
      const freq = {};
      for (let char of str) {
          if (char.match(/[a-zA-Z]/)) {
              freq[char] = (freq[char] || 0) + 1;
          }
      }
      return Object.entries(freq);
    }
    console.log(letterFrequency("hello world")); // [['h',1], ['e',1], ['l',3], ['o',2], ['w',1], ['r',1], ['d',1]]
    
    // 52. Fibonacci(500) with high precision
    function fibonacciBig(n) {
      let a = 0n, b = 1n;
      for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
      return b;
    }
    console.log(fibonacciBig(500).toString()); // Large number
    
    // 53. Calculate 70! with high precision
    function factorialBig(n) {
      let result = 1n;
      for (let i = 1n; i <= BigInt(n); i++) result *= i;
      return result;
    }
    console.log(factorialBig(70).toString()); // Large number
    
      
      
     
      