//to String 
let num=123;
console.log(String(num));
console.log((123).toString());
console.log(true.toString());
let arr=[1,2,3];
console.log(String(arr));

//to number
console.log(Number("123"));
console.log(Number("123abc"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));
console.log(parseInt("123.45"));
console.log(parseFloat("123.45"));
let str="456";
console.log(+str);      //Unary Plus

//TO boolean
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(null));

//Implicit Conversion(Coercion)
//String 
console.log("12234"+ 4);
console.log("Hello"+true);
console.log(1324+"");

//number
console.log("5" - 2); 
console.log("10"*2);
        
console.log("6" / "2");      
console.log("abc" - 2);       

//Boolean
if ("Hello") console.log("Truthy");  
if (0) console.log("Falsy");       
console.log(1 + true);        
console.log(false + " is falsy"); 

//Mixed 
console.log(5 + "5");         
console.log("5" - 3);         
console.log(true + 2);        
console.log(false + " is false");
console.log("10" == 10);      
console.log("10" === 10);     

