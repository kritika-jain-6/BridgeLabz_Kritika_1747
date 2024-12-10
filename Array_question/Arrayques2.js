function Occurence(){
    const sortedArray = [1, 1, 1, 2, 2, 3, 3, 3, 3];
    const frequencyMap = sortedArray.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      
      console.log(frequencyMap);      
}
//Occurence
function rowsinmaximum1(){
    const arr1=[
        [0,1,1,1],
        [0,0,1,1],
        [1,1,1,1],
        [0,0,0,0]
    ];
    let maxrow=0;
    let maxcount=0;
    arr1.forEach((row,index)=>{
        let onecount=row.filter(num=>num===1).length;
        if(onecount>maxcount){
            maxcount=onecount;
            maxrow=index
        }
    });
    console.log(maxrow);
}
//rowsinmaximum1()
 
function MajorityElements(){
    const arr=[1,1,2,1,3,5,1];
    let n=arr.length;
    for(let i=0;i<n;i++){
        let count=0;
        for(let j=0;j<n;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }  
        if(count>n/2){
            console.log(count);
            break;            
        } 
        else{
            console.log(-1);
        }     
    }       
}
//MajorityElements();

function WaveyArray(){
    let arr = [10,20,1,2,3,6,4,7];
    arr.sort();  
    for(let i=0;i<arr.length-1;i+=2){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
    console.log(arr);  
  
}
//WaveyArray();

function factorial(){
    const n=100;
    let res=BigInt(n);
    for(let i=2;i<n;i++){
        res*=BigInt(i);
    }
    console.log(res);    
}
//factorial();

function Peakelement(){
    const arr = [1,2,3,4,7,8,3];
    let peak = 0;
    for(let i=1;i<arr.length-1;i++){
        if(arr[i] >arr[i-1] && arr[i] >arr[i+1]){
        peak = i;
        }
  }
  console.log(peak);
}
//Peakelement();

function KthsmallestElement(){
    const arr=[7,10,4,3,20,15];
    let k=3;
    arr.sort((a,b)=>a-b);
    console.log(arr[k-1]);
}
//KthsmallestElement();

function arraytostring(){
    //let arr=[1,2,3];
    let str=["my","name","is"];
    let res="";
    let n=str.length;
    //console.log(str.toString());
    for(let i=0;i<n;i++){
        res+=str[i];
        if(i<str.length-1){
            res+=" ";
        }
    }
    console.log(res);
    let z =["My"," name"," is"];
    console.log(...z);
    
}
//arraytostring();
function secondLargest(){
    const arr=[2,5,8,3,5,7];
    arr.sort((a,b)=>a-b);
    console.log(arr[arr.length-2]);    
   for(let i=arr.length;i>=0;i--){
    console.log(arr[i-2]);
    break;
   }
    
}
//secondLargest()

function secandthird(){
    const arr=[56,93,48,26,15,78];
    let n=arr.length;
    //arr.sort((a,b)=>a-b);
    /*console.log(arr[arr.length-2]);
    console.log(arr[arr.length-3]);
    for(let i=arr.length;i>=0;i--){
        console.log(arr[i-2]);
        console.log(arr[i-3]);
        break;  
    }*/
   let max=arr[0];
   let secmax=arr[0];
   let thirdmax=arr[0];
   for(let i=0;i<n;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]>secmax && arr[i]<max){
        secmax=arr[i];
    }
    if(arr[i]>thirdmax && arr[i]<secmax){
        thirdmax=arr[i]
    }   
    }
   console.log(max);
   console.log(secmax);
   console.log(thirdmax); 
}
//secandthird();

function subarray(){
    const arr=[1,4,0,0,3,10,5];
    const sum=7;
    let n=arr.length;
    for(let i=0;i<n;i++){
        let sum1=0;
        for(let j=i;j<n;j++){
            sum1+=arr[j];
        if(sum1===sum){
            console.log(arr.slice(i , j + 1));  
            return ; 
        }
        }
    }
    console.log(-1);
        
}
//subarray();

function subset(){
    const arr1=[11,1,13,21,3,7];
    const arr2=[11,3,7,1];
    let n=arr1.length;
    let m=arr2.length;
    for(let i=0;i<m;i++){
        let res=false;
        for(let j=0;j<n;j++){
            if(arr2[i]===arr1[j]){
               res=true;
               break;
            }
        }
        if(!res){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
//subset();

function union(){
    let a=[1,1,2,2,2,4];
    let b=[2,2,4,4];
    const res=[...a,...b];
    const unionset=new Set ([...a, ...b]);
    const arr = [...unionset];
    console.log(res);    
    console.log(unionset);   
}
//union();

function intersection() {
    let a = [1, 1, 2, 2, 2, 4];
    let b = [2, 2, 4, 4];

    // Create a Set from array 'a' to store unique elements
    const arr = new Set(a);

    // Filter elements in 'b' that exist in 'arr' and ensure the result is unique using Set
    const res = [...new Set(b.filter((element) => arr.has(element)))];

    console.log(res); // Output: [2, 4]
}

intersection();



/*const address={
    "riya":"pune",
    "jiya":"goa",
    "kevin":"noida"
};
const addressMap=new Map(Object.entries(address));
const addres=new Map(Object.fromEntries(address));
console.log(addres);
console.log(addressMap);*/

