
function reverseString(s){
let charArray =s.split('');
let reverseA=charArray.reverse('');
let reverseS=reverseA.join('')
return reverseS;
}
let s="Kritika";
let revString=reverseString(s);
//console.log(revString);
let result= s.split('').reverse('').join('');
console.log(result);




