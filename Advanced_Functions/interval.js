function sayHi(){
    console.log("Hello everyone");
}

//setTimeout(sayHi,5000);
/*
let timer=setTimeout(()=>console.log("Hello"),1000);
console.log(timer);
clearTimeout(timer);
console.log(timer);

let timerId=setInterval(()=>console.log("Start"),2000);
setTimeout(()=>{
    clearInterval(timerId);
    console.log("Stop");
},5000);
*/

function time(from,to){
    let current=from;
    let timing=setInterval(function(){
        console.log(current);
        if(current==to){
            clearInterval(timing);
        }
        current++;
    },1000);
}

time(1,10);