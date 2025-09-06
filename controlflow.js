let makes=85;
if(makes>=90){
    console.log("A+ grade");
}else if(makes>=80){
    console.log("A grade");
}else if(marks>=70){
    console.log("B+ grade");

}else{
    console.log("fail");
}

let day=5
switch(day){
case 1:
    console.log("monday");
    break;
case 2:
    console.log("tuesday");
    break;
case 3:
    console.log("wednesday");
    break;
case 4:
    console.log("thursday");
    break;
case 5:
    console.log("friday");
    break;
case 6:
    console.log("saturday");
    break;
case 7:
    console.log("sunday");
    break;
default:
    console.log("invalid day");
    break;
}
for(let i=1;i<=5;i++){
    console.log("eswar");
} 
let j=0   
while(j<=10){
    console.log(j);
    j++;
}
let colors=["red","green","blue"];
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
for(let color of colors){
    console.log(color);
}
let person={
    name:"eswar",
    age:19
}
for(let key in person){
    console.log(key,person[key]);
}
