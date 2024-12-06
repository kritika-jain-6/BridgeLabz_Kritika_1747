//if else:
let age=21;
if(age>18)
{
    console.log("You are an adult");

}
else{
    console.log("Not an adult");
}

//else if:
let age1=25;
if(age1>=18)
{
    console.log("An adult");
}
else if(age1>=13)
{
    console.log("You are a teenager");
}
else{
    console.log("You are child");
}


//switch
let day=4;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    
        case 2:
            console.log("Tuesday");
            break;
        
        case 3:
        console.log("wednesday");
        break;

        case 4:
        console.log("Thursday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

        default:
        console.log("Invalid Day");

}

//Ternary Operator:
let age2=18;
let result=(age2>=18)?"You are an adult":"You are a minor";
console.log(result);

