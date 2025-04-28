function unique(num){
    let res=num.filter((each,index,a)=>a.indexOf(each)===index);
    return res;
}


let num=['a','b','c','a','b','v','a','c'];
//console.log(unique(num));

function split(num){
    let even=num.filter((each)=>each%2==0);
    let odd=num.filter((each)=>each%2!==0);
    console.log(even);
    console.log(odd);
}

let number=[12,6,4,3,9,7,13];
//split(number);
let res=[]
function check(obj1,obj2){
    let a=Object.keys(obj1);
    for(let i of a){
        if(JSON.stringify(obj1[i]).split(",").length>1){
            check(obj1[i],obj2[i]);
        }else{
            res.push(obj1[i]==obj2[i]);
        }
    }
}
let obj1={id:1,name:"Ram",salary:50000,task:{completed:3,incomplete:2},sample:{task1:2,task3:3}};
let obj2={id:1,salary:50000,sample:{task3:3,task1:2},name:"Ram",task:{incomplete:2,completed:3}};
check(obj1,obj2);
let result=res.every(each=>each);
console.log(result);