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

function Isequal(obj1,obj2){
    let res=true;
    if(obj1===obj2){
        return "Objects are equal";
    }else if(obj1==null || obj2==null){
        return "Objects are not equal";
    }
    function check(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        const values1=Object.values(obj1);
        const values2=Object.values(obj2);
        if(values1.length===values2.length && keys1.length===keys2.length){
            if(JSON.stringify(keys2.sort())===JSON.stringify(keys1.sort())){
                for(let i of keys1){
                    if(typeof obj1[i]=="object"){
                        check(obj1[i],obj2[i]);
                    }
                    else if(obj1[i]!==obj2[i]){
                        res=false;
                        break;
                    }
                }
            }else{
                res=false;
            }
        }else{
            res=false;
        }
        return res
    }
    if(check(obj1,obj2)){
        return "Objects are equal";
    }else{
        return "Objects are not equal";
    }
  
}

let obj1 ={name:null}, obj2 = {name:null};
console.log(Isequal(obj1,obj2));
  


