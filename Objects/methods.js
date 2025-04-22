let calculator = {
    read(){
        this.a=5;
        this.b=5;
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );





let ladder={
    step:0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    stepdown(){
        console.log(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.stepdown();
ladder.down();
ladder.stepdown();
//ladder.up().up().down().stepdown().down().stepdown();



function User(name){
    this.name=name;
    this.sayHi=function(){
        return `Hi this is ${this.name}`;
    };
};

let john=new User("john");
console.log(john.sayHi());
let ram=new User("ram");
console.log(ram.sayHi());




function Calculator(){
    return{
        read(){
            this.a=10;
            this.b=20;
        },
        sum(){
            return this.a+this.b;
        },
        mul(){
            return this.a*this.b;
        }
    };
};

let operation=new Calculator();
operation.read();
console.log(operation.sum());
console.log(operation.mul());


let a={};
console.log(a.address?.street);
console.log(a.address?.());


let sym=Symbol.for("name");
console.log(Symbol.keyFor(sym));

let user={
    name:"john",
    salary:1500,
    [Symbol.toPrimitive](hint){
        console.log(hint);
        return hint=="string" ?  this.name:this.salary;
    }
};
console.log(user);
console.log(+user);
console.log(user+500);


let user1={
    name:"Ram",
    money:"1200",

    toString(){
        return this.name;
    },
    valueOf(){
        return this.money;
    }
};

console.log(user1);
console.log(+user1);
console.log(user+500);