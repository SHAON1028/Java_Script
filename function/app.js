function sum(a,b){
    return a+b;
    
}

console.log(sum(2,3));//5

function sleep(names){
    console.log(names + " is Sleeping");
}

sleep("shaon");//shaon is Sleeping
sleep("shaon2")//shaon2 is Sleeping
sleep(5)//5 is Sleeping


function sum(a,b){
    console.log("hello");
}

let x  = sum(5,4);
console.log(x);//undefined
//function call korle return kore return na korle by default undefined return kore
let carName = "BMW"
function myFunction(){
    let carName = "Volvo";
    console.log(carName);
}
myFunction();//Volvp

console.log(carName);