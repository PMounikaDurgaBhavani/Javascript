let promise=new Promise((resolve,reject)=>{
    resolve(1);
    setTimeout(()=>resolve(2),1000);
});
promise.then(console.log);


function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),ms);
    })
  }
  
//delay(3000).then(() => console.log('runs after 3 seconds'));

new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
});

new Promise((resolve,reject)=>{
    setTimeout(()=>reject("Whoops!"),1000);
}).catch(console.log);

Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),1000)
    }),
    2,
    3
]).then(console.log);

let urls = [
    'https://api.github.com/users/iliakan',
    'https://no-such-url',
    'https://api.github.com/users/remy'
];

Promise.allSettled(urls.map((url)=>fetch(url)))
.then(results=>{
    results.forEach((result,num)=>{
        if(result.status=="fulfilled"){
            console.log(`${urls[num]}:${result.value.status}`);
        }
        if(result.status=="rejected"){
            console.log(`${urls[num]}:${result.reason}`);
        }
    });
});

Promise.race([
    new Promise((resolve,reject)=>setTimeout(()=>resolve(2),3000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Whoops!")),1000))
]).then(console.log);

Promise.any([
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error("Whoops!")),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(2),2000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(3),3000))
]).then(console.log);




async function loadJson(url){
    let response= await fetch(url);
    if(response.status==200){
        let json=await response.json();
    }
    throw new Error(response.message);
};
loadJson('https://javascript.info/no-such-user.json').catch(console.log);