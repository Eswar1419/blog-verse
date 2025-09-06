let person={
    name:"eswar",
    age:19,
    college:"jntugv"
}
console.log(person.name)
console.log(person["age"])
const {name,age,college}=person;
console.log(name)
console.log(age)

let arr=[1,2,3,4,5];
let square=arr.map((num)=>num*num);
console.log(square);
let even=arr.filter((num)=>num%2==0);
console.log(even);
let sum=arr.reduce((acc,num)=>acc+num,0);
console.log(sum);

let x=[{name:"eswar",marks:19},{name:"devi",marks:18},{name:"kumar",marks:17}];
console.log(x[1].name);
if(x[0].marks>x[1].marks && x[0].marks>x[2].marks){
    console.log(x[0].name +" is topper");
}
else if (x[1].marks>x[0].marks && x[1].marks>x[2].marks){
    console.log(x[1].name +"is topper");
}
else{
    console.log(x[2].name +"is topper");
}

let maxMarks=0;
let topper="";
for(let x of x){
    if(x.marks>maxMarks){
        maxMarks=x.marks;
        topper=x.name;
}
}
console.log(`topper is ${topper} with marks ${maxMarks}`);
