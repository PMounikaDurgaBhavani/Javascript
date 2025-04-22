let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum=0;
for(let i in salaries){
    sum+=salaries[i];
}
console.log(sum);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
for(let i in menu){
    if(!isNaN(menu[i])){
        menu[i]=menu[i]*2;
    }
}  
console.log(menu);







// copy by reference


let user={name:"john"};
let admin=user;
admin.name="peter";
console.log(user.name);


// copying

let student={name:"Ravi"};
let teacher=Object.assign({},student);
console.log(teacher.name);
teacher.name="Ram";
console.log(student.name);
console.log(teacher.name);


//nested cloning

let user1={name:"john", sizes:{height:120, weight:50}};
let admin1=Object.assign({},user1);
admin1.sizes.weight=60;
console.log(user1.sizes.weight);



let user2={name:"john",sizes:{height:120,weight:50}};
let admin2=structuredClone(user2);
admin2.sizes.weight=60;
console.log(user2.sizes.weight);
console.log(admin2.sizes.weight);