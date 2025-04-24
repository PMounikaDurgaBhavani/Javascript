try{
    console.log("Hi everyone");
    slow;
    console.log("Hello");
}catch(err){
    console.log(err.name);
    console.log(err.message);
    //console.log(err.stack);
}

class FormatError extends SyntaxError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}

let error= new FormatError("Formatting error");
console.log(error.name);
console.log(error.message);
console.log(error instanceof SyntaxError);