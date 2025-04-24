/*class User{
    constructor(name){
        this.name=name;
    }
    sayHi(){
        return `Hi, this is ${this.name}`;
    }
}

let user=new User("John");
console.log(user.sayHi());

console.log(typeof User);
console.log(User==User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));*/

/*class User{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length<4){
            console.log("The length is too short");
        }
        this._name=value;
    }
}

let user=new User("John");
console.log(user.name);
user=new User("Ramu");
console.log(user.name);*/
/*
class Button{
    constructor(value){
        this.value=value;
    }
    click=()=>{
        console.log(this.value);
    }
}

let button=new Button("Hello");
setTimeout(button.click,1000);*/
class Clock{
    constructor({template}){
        this.template=template;
    }
    render(){
        let date=new Date();
        let hours=date.getHours();
        if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output =this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(()=>this.render(), 1000);
    }

    }

  let clock = new Clock({template: 'h:m:s'});
  clock.start();