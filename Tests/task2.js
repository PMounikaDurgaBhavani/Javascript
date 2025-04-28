/*let arr1=[];
arr1.push("Apple");
arr1.push("Banana");
arr1.push("Orange");
arr1.push("Kiwi");
arr1.push("Watermelon");
console.log(arr1);

let arr2=["red","blue","white","black"];
arr2.pop();
console.log(arr2);

let arr3=[3,5,7,9,2];
arr3.unshift(1,8);
console.log(arr3);

let arr4=["Vizag","Palakollu","Hyderabad","Benguluru"];
arr4.shift();
console.log(arr4);

let arr5=["Ram","Ragu","Ravi","Ramesh","Rakesh"];
arr5.forEach((each)=>{
    console.log(`Hello ${each}!`);
});

let arr6=[1,2,3,4,5,6];
let res=arr6.map((each)=>each*each);
console.log(res);

let ages=[16,17,18,12,20,22,11,15];
let res1=ages.filter((each)=>each>=18);
console.log(res1);

let obj=[{id:1,name:"Sam"},{id:2,name:"Ravi"}];
let res2=obj.find((each)=>each.name==="Sam");
console.log(res2);

let arr7=[10, 15, 30];
let res3=arr7.reduce((total,num)=>total+num,0);
console.log(res3);

let res4=ages.sort((a,b)=>b-a);
console.log(res4);

let arr8=[1,2,3,4,5];
let res5=arr8.slice(1,4);
console.log(res5);

arr8.splice(1,1,6);
console.log(arr8);
*/

function load(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Data loaded"),2000)
    });
}

//load().then(data=>console.log(data));

function condition(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sucess=true;
            if(sucess){
                resolve("Success!");
            }else{
                reject("Error Occured!");
            }
        },1000);
    });
}

//condition().then(data=>console.log(data)).catch(data=>console.log(data));

function cal(){
    return new Promise((resolve)=>{
        resolve(10);
    });
}

/*cal().then((num)=>{
    return num*2;
}).then((num)=>{
    return num-5;
}).then((num)=>{
    console.log(num);
})*/

function data(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Hello, async!"),1000);
    });
}

async function print(){
    let promise=await data();
    console.log(promise);
}

//print();

function loaded(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve("Hello, async!");
            }else{
                reject("Error occured");
            }
        });
    });
}

async function load_print(){
    try{
        let promise=await loaded();
        console.log(promise);
    }catch(error){
        console.log(error);
    }
}

//load_print();

async function fetchData(){
    let promise=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let res=await promise.json();
    console.log(res.title);
}
//fetchData();

function sequence(data){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data),1000)
    });
}

async function seq1(){
    let res=await sequence("Hello");
    console.log(res);
}

async function seq2(){
    let res=await sequence("Hi");
    console.log(res);
}

async function seq3(){
    let res=await sequence("Bye");
    console.log(res);
}

async function result(){
    await seq1();
    await seq2();
    await seq3();
}

//result();

function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Task1 completed"),1000);
    });
}

function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Task2 completed"),2000);
    });
}

function task3(){
    return new Promise((reject)=>{
        setTimeout(()=>reject("Error occured in Task3"),3000);
    });
}

function task4(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Task4 completed"));
    });
}

async function tasks(){
    let promise=await Promise.allSettled([task1(),task2(),task3(),task4()]);
    console.log(promise);
}
//tasks();

let a={
    "id":1,
    "name":"Ram",
    sample:[1,2,3,4]
};

let c = JSON.parse(JSON.stringify(a));

console.log(c);

a.id=3;

console.log(c);
