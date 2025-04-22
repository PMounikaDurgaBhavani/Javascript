for(let num=0;num<=10;num++){
    console.log(num)
}
let i=0;
while(true){
    if(i==5){
        break;
    }
    console.log(i++);
}
let j=0;
do{
    console.log(j++);
}while(j<=3);

let k=5;
switch(k){
    case 4:
        console.log("Small");
        break;
    case 5:
        console.log("Exactly");
        break;
    case 6:
        console.log("Large");
        break;
    default:
        console.log("Not the Number");
}