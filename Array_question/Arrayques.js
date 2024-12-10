//Maximum and  minimum in array
//sum of the element
//negative and positive in array

function maxminandsum(){
    const arr=[1,2,3,4,5];
    let max=arr[0];
    let min=arr[0];
    let sum=0;
    arr.forEach((elem)=>{
        /*if(elem>max){
            max=elem;
        }
        else if(elem<min){
            min=elem;
        }*/

        max=Math.max(max,elem);
        min=Math.min(min,elem); //
        sum+=elem;
    });
    //console.log(max);
    //console.log(min);
    //console.log(sum);
}

function cyclicrotationsandreverse(){
    const arr=[34,56,78,22,2,7];
    /*const last=arr.pop();
    arr.unshift(last);
    console.log(arr);  
    console.log(arr.reverse());*/
    arr.sort((a,b)=>a-b);
    console.log(arr);
}
//cyclicrotationsandreverse()

function posandnegarray(){
    let arr1 = [-1, -2, -3, 5, 7, 4];
    let posarr = [];
    let negarr = [];

    arr1.forEach((elem) => {
        if (elem < 0) {
            negarr.push(elem); // Push to negative array
        } else if (elem > 0) {
            posarr.push(elem); // Push to positive array
        }
    });

    console.log("Positive Array:", posarr); // Output: [5, 7, 4]
    console.log("Negative Array:", negarr); // Output: [-1, -2, -3]

}

function duplicateandsort(){
    let arr=[1,2,3,2,3,4,4,4];
    const arr1=[];

    arr.sort();

    arr.forEach((elem,index)=>{
        if(elem === arr[index+1]){
            arr1.push(elem);
        }
    });
    console.log(arr1);

}









