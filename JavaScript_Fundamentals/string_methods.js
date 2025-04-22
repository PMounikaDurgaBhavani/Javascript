var str="Hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var str="Widget with id";
console.log(str.indexOf("with"));


console.log(str.lastIndexOf("id"));

console.log(str.includes("id"));

console.log(str.startsWith("wid"));
console.log(str.endsWith("id"));

console.log(str.slice(0,7));

console.log(str.substring(6,2));

console.log(str.substr(2,12));

// Array Methods

let arr=["apple","orange","banana","kiwi","papaya"];
console.log(arr.pop());
console.log(arr);
arr.push("pineapple")
console.log(arr);
console.log(arr.shift());
arr.unshift("pomegranate")
console.log(arr);

arr=['I',"study","Javascript"];
console.log(arr.splice(1,2));//remove from index 1 with length 2
arr.splice(1,2,"let's","started");
console.log(arr);

console.log(arr.slice(1,2));

let arr1=[1,2];
let obj1={0:"something",1:"else",length:2};
console.log(arr1.concat(obj1));
let obj={
    0:"something",
    1:"else",
    [Symbol.isConcatSpreadable]:true,
    length:2
};
console.log(arr1.concat(obj));


let arr2=[1,2,3,4,5];
arr2.forEach((item,index)=>{
    console.log(`${item} is at index ${index}`);
})