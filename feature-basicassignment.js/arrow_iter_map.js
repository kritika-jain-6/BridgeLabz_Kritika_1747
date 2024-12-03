const add =(a,b)=> a+b;     // single arrow function used 
console.log(add(2,3));


const multiply=(a,b)=>{         // multiply function used in the arrow

    const res=a*b;
    return res;
};
console.log(multiply(2,3));     

/*function Person(){
    this.age=0;
    setInterval(()=>{
        this.age++;                 //lexical 
        console.log(this.age);        
    },1000);
}
 const person=new Person();*/

 const greet =()=>"hii guys!!";     // without paramenter we used it 
 console.log(greet());
 
 const sqrt=x=>x*x;
 console.log(sqrt(5));      // with one parameter we used it 
 
 const nums=[1,2,3,4,5];        // used in Array and here used map function also.
 const doubled=nums.map(num=>num*2);
 console.log(doubled);
 


const arr=[5,6];                //Iterables using the array  Iterables is any object using loops.
for (const value of arr){
    console.log(value);    
}

const str="Hii";       // Iterables using string
for (const char of str){
    console.log(char);    
}

const map1=new Map([['a',1],['b',2]]);        //using the mapin iterables 
for (const [key,value] of map1){
    console.log(key,value);    
}

const set1=new Set([7,7,9]);     // using the set in iterables
for (const values of set1){
    console.log(values);    
}

const ar=[9,1,2]; 
const copy=[...ar];// using the spread operator in iterables
console.log(copy);
console.log(ar);


//Iterables are used for flexibility, readability and custon iteration





const map=new Map();// Creating the map
map.set("name","Kritika");      //Adding key value pairs
map.set("age",21);
map.set({id:1},'Object as key');
console.log(map.get("name"));      //Accessing the key value pair
console.log(map.get("age"));

console.log(map.has("name"));//checking for a key
map.delete("age");      // Removing a key-value pair
for (const [key,value]of map){
    console.log(key,value);     // Iterating the entries
    
}
console.log(map.size);     //getting the size of the map
//map is used for flexibility, order, performance. methods

const weakMap = new WeakMap();

const obj1 = {};
const obj2 = {};

weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');

console.log(weakMap.get(obj1)); // Output: 'value1'
console.log(weakMap.get(obj2)); // Output: 'value2'

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // Output: false


const set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored
set.add('hello');
set.add({ key: 'value' });

// Checking for a value
console.log(set.has(1)); // Output: true

// Removing a value
set.delete(2);

// Iterating over values
for (const value of set) {
    console.log(value);
}

// Getting the size of the Set
console.log(set.size); // Output: 3


const weakSet = new WeakSet();

const obj11 = { key: 'value1' };
const obj12 = { key: 'value2' };

// Adding objects
weakSet.add(obj11);
weakSet.add(obj12);

// Checking for an object
console.log(weakSet.has(obj11)); // Output: true

// Removing an object
weakSet.delete(obj11);
console.log(weakSet.has(obj11)); // Output: false

