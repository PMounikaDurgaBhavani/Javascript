/*class Speed{
    constructor(name){
        this.speed=0;
        this.name=name;
    }
    run(speed){
        this.speed=speed;
        return `the speed is ${this.speed}`;
    }
    stop(){
        this.speed=0;
        return `${this.name} stops!`;
    }
}
class Rabbit extends Speed{
    hide(){
        return `${this.name} hides`;
    }
    stop(){
        super.stop();
        this.hide();
    }
}
let rabbit=new Rabbit("White Rabbit");
console.log(rabbit.run(5));
console.log(rabbit.hide());*/

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  console.log(rabbit.name);


//Protected --> starts with underscore(_).
//Private --> starts with hash(#).