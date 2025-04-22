function divisible_by_6(n){
    if(n%2==0 && n%3==0){
        return true
    }else{
        return false
    }
}

let number=[4,6,9,12,18,30];
for(let i of number){
    if(divisible_by_6(i)){
        console.log(i);
    }
}


// Arrow Functions
let a=6;
let b=6;
let product=(a,b)=>{
    return a*b
}
console.log(product(a,b));