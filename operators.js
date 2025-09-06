let E=10,D=5;
console.log(E+D);
console.log(E-D);
console.log(E*D);
console.log(E/D);
console.log(E%D);
console.log(E**D);

// assignment operators

let z=5;
z+=3;
console.log(z);
console.log(z-=2);
console.log(z*=2);
console.log(z/=2);
console.log(z%=2);
console.log(z**=2);

// comparison operators

let A=10,B="18";
console.log(A==B);
console.log(A!=B);
console.log(A===B);
console.log(A<=B);
console.log(A>=B);
console.log(A<B);

//logical operators

let age=19;
console.log(age>=20 && age<=40);
console.log(age<20 || age>20);
console.log(!(age>20));

// string concatenation

let firstName="eswar";
let lastName="devi";
let fullName=firstName+" "+lastName;
console.log(fullName);
let correctName=`hello ${firstName} ${lastName},welocome to dev astra`;
console.log(correctName)

//ternary operator

let myage=19;
if(myage>=18){
    console.log("you can vote");
}else{
    console.log("you can't vote")
}
let result=myage>=18 ? "eligible to vote":"not eligible to vote";
console.log(result);

//increment and decrement operators

let count=5;
console.log(count++);
console.log(count);
console.log(++count);

//typeof operator

console.log(typeof count);
console.log(typeof "eswar");
console.log(typeof 18);