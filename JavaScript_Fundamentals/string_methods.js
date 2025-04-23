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
});



function unique(arr) {
    let res=Array.from(new Set(arr));
    return res;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );



  //Map--> The values we stored in the variables until we remove, after removed the data is stored in memory. No garbage collected.
  //WeakMap--> here after removed the data is garbage collected. the data is removed from the memory.
  //Set--> stores only unique values.
  //WeakSet--> it set is inaccessable, the data is removed from the memory.

  let messages=[
    {text:"Hello",from:"John"},
    {text:"How goes?",from:"John"},
    {text:"See you soon",from:"Alice"}
  ];

  let weakset=new WeakSet();
  weakset.add(messages[0]);
  weakset.add(messages[1]);
  weakset.add(messages[0]);
  console.log(weakset.has(messages[2]));

  let weakmap=new WeakMap();
  weakmap.set(messages[0], new Date(2017, 1, 1));
  console.log(weakmap.get("text"));




  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(arr){
    let res=0;
    for(let i of Object.values(salaries)){
        res+=i
    }
    return res;
  }
  console.log( sumSalaries(salaries) );

  let now=new Date();
  console.log(now);
  console.log(now.getFullYear());
  console.log(now.getMonth());
  console.log(now.getDate());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getSeconds());
  console.log(now.getMilliseconds());
  

  let user = {
    name: "John Smith",
    age: 35
  };

  let userData=JSON.parse(JSON.stringify(user));
  console.log(userData);


  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key!= "" && value==meetup)?undefined:value;
  }));
  
  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */