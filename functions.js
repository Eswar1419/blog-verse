function greet() {
    console.log("welcome to dev astra")
}
greet()
function add(a,b){
    return a+b;
}
let sum =add(5,10);
console.log(sum);

//arrow function
const square =(x)=>x*x
console.log(square(5));
const substract=(x,y)=>{
    console.log(x,y);
    return x-y;
}
x=substract(10,3);
console.log(x);

function eswar(a) {
    console.log(`hello this is eswar ${a(5,10)}`);   
}
eswar(add)