let a=true;
let b=false;
console.log(a&&b);// and operator
console.log(a||b);// or operator
let c=true;
console.log(!c); //not operator
let user =null;
let defaultUser="Guest";
let currentUser=user??defaultUser;
console.log(currentUser);//nullish opeeraot 
//combining the logical and nullish operator
let user1=null;
let isloggedin=true;
let currentuser=(user ?? "guest")&&isloggedin;
console.log(currentuser);



