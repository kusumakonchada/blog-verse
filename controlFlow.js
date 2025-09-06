let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}
else if(marks>=80){
    console.log("A Grade")
}
else if(marks>=70){
    console.log("B Grade")
}
else{
    console.log("Fail")
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
        console.log("invalid");
        break;
}
 let n=5,i;
for(i=0;i<n;i++){
    console.log("kusuma");
}
let j=0,k=5;
while(j<k){
    console.log("kusuma");
    j+=1;
}
let m=0,v=5;
do{
    console.log(m);
    m++;
}while(m<v);

let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color)
}
let person={
    name:"kusuma",
    age:18,
    college:"JNTUGV"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i++){
    if(i==3){
        continue;
    }
    else if(i==2){
        break;
    }
    console.log(i)
}