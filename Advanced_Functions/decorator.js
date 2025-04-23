function slow(x){
    console.log(`calling the ${x}`);
    return x;
}

function cachingDecorator(func){
    let cache = new Map();
    return function(x){
    if(cache.has(x)){
        return cache.get(x);
    }
    let result=func(x);
    cache.set(x,result);
    return result;
}
}

slow=cachingDecorator(slow);

//console.log(slow(1));
//console.log("Again: "+slow(1));
//console.log(slow(2));


function sayHi(phrase){
    console.log(`${phrase}, ${this.name}`);
}
let user={name:"Bhavani"};
//sayHi.call(user,"Hello");


function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

function spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this,args);
    }
    wrapper.calls=[];
    return wrapper;
}
  
work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9
  
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}