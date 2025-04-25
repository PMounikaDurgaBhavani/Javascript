function *Generator(){
    yield 1;
    yield 2;
    yield 3;
}
let generator=Generator();
for(let i of generator){
    console.log(i);
}

let gen=[0,...Generator()];
console.log(gen);

let range={
    from:1,
    to:10,
    *[Symbol.iterator](){
        for(let i=this.from;i<=this.to;i++){
            yield i;
        }
    }
};
console.log([...range]);



function* GeneratorSeq(start,end){
    for(let i=start;i<=end;i++) yield i;
}

function* GeneratorCode(){
    yield* GeneratorSeq(48,57);
    yield* GeneratorSeq(65,90);
    yield* GeneratorSeq(97,122)
}

let str='';
for(let i of GeneratorCode()){
    str+=String.fromCharCode(i)+" ";
}
console.log(str);

function* Gener(){
    let result=yield "2 + 2 = ?";
    console.log(result);
}

let gener=Gener();
let ques=gener.next().value;
gener.next(5);


function* generate(){
    let result=yield "2 + 2 = ?";
}

let generating=generate()
let question=generating.next().value;
try{
    generating.throw(new Error("This is not there in database."));
}catch(e){
    console.log(e);
}

function* pseudoRandom(seed){
    let value=seed;
    while(true){
        value = value * 16807 % 2147483647;
        yield value;
    }
}

let generator1 = pseudoRandom(1);

console.log(generator1.next().value); // 16807
console.log(generator1.next().value); // 282475249
console.log(generator1.next().value); // 1622650073



let range1={
    from:1,
    to:5,

    [Symbol.asyncIterator](){
       return{ 
        current:this.from,
        end:this.to,
        async next(){
            await new Promise(resolve=>setTimeout(resolve,1000));
            if(this.current<=this.end){
                return {done:false,value:this.current++};
            }else{
                return {done:true};
            }
        }
    }

    }
};

(async ()=>{
    for await(let i of range1){
        console.log(i);
    }
})()



async function* Genarate(start,end){
    for(let i=start;i<=end;i++){
        await new Promise(resolve=>setTimeout(resolve,1000));
        yield i;
    }
}

(async ()=>{
    let genarate=Genarate(1,6);
    for await(let i of genarate){
        console.log(i);
    }
})()