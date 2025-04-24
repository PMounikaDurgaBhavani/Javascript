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