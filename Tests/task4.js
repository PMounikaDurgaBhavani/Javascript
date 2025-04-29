function getKeys(obj){
    if(obj===null){
        return [];
    }
    let res=[];
    function getAllKeys(obj){
        for(let i of Object.keys(obj)){
            res.push(i);
            if(JSON.stringify(obj[i])[0]=="{"){
                getAllKeys(obj[i])
            }
        }
    }
    getAllKeys(obj)
    return res;
}
 
const obj =  {a:1,b:{c:2},d:{e:1,f:[1,2,3]}};
console.log(getKeys(obj));
// Output: ['a', 'b', 'c', 'd', 'e']

