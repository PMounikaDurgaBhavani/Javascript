function checkNum(num){
    return new Promise((resolve,reject)=>{
        if(typeof num !=="number"){
            reject("This is not a number");
        }
        if(num%2==0){
            resolve("This is a Even number");
        }else{
            resolve("This is Odd Number");
        }
    })
}

//checkNum(6).then(console.log).catch(console.log);

function Isprime(num){
    return new Promise((resolve,reject)=>{
        if(typeof num !=="number" || num<2){
            reject("Give number greater than 1");
        }else{
            for(let i=2;i<num;i++){
                if(num%i===0){
                    resolve("This is not a prime number");
                    return;
                }
            }
            resolve("This is a prime number");
        }
    })
}

//Isprime(11).then(console.log).catch(console.log);

function Range(num){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(num);
            resolve()},1000)
    })
}
function printRange(start,end){
    let promise=Promise.resolve();
    for(let i=start;i<=end;i++){
        promise=promise.then(()=>Range(i));
    }
}
//printRange(1,6)


function print(light,ms){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(light),ms);
    });
}

async function print_range(){
    let traffic=["Red","green","yellow"];
    let n=3000;
    for(let i of traffic){
        let promise=await print(i,n);
        console.log(promise);
        n-=1000;
    }
}
//print_range();


function Prime_range(num){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num),1000);
    });
}
function is_prime(n){
    let result=true;
    for(let i=2;i<n;i++){
        if(n%i===0){
            result=false;
        }
    }
    return result;
}
async function Prime_Print(start,end){
    for(let i=start;i<=end;i++){
        if(is_prime(i)){
            let promise=await Prime_range(i);
            console.log(promise);
        }
    }
}
//Prime_Print(2,50);


function Fib_Range(num){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num),1);
    });
}
async function Fib_print(n){
    let a=1;
    let b=1;
    let c;
    let promise;
    let result=[a,b];
    if(n==1){
        console.log(result[0]);
    }else{
    for(let i=3;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
        promise=await Fib_Range(c);
        result.push(promise);
    }
    for(let i of result){
        console.log(i)
    }
}
}

//Fib_print(300);

function Armstrong(n){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(n),500);
    })
}  

async function Armstrong_print(num){
    let str=String(num);
    let result=0; 
    for(let i of str){
        result+=i**str.length;
    }
    let promise=await Armstrong(num);
    if(num==result){
        console.log(`${promise} is a Armstrong number`);
    }else{
        console.log(`${promise} is not a Armstrong number`);
    }
}

Armstrong_print(153); 