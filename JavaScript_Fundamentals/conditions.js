let age=20;
if (age>18){
    console.log("Eligible for vote");
}else{
    console.log("Not Eligible for vote");
}

age=16;
let result=age>18 ? "Eligible for vote" : "Not Eligible for vote";
console.log(result);


let first=null;
let last=null;
let nickname="John";
console.log(first ?? last ?? nickname ?? "Anonymous");
console.log("Anonymous" ?? nickname);