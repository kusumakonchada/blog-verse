let person={
    name:"yochana",
    age:19,
    college:"JNTUGV"
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;//destructuring assignment
console.log(name)
console.log(age)

let fruits=["apple","orange","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num);//transform each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0)
console.log(evens)

let sums=numbers.reduce((present,num)=>present+num,0)
console.log(sums)
 persons=[{
    name:"kusuma",
    marks1:34
},
{
    name:"yochana",
    marks2:45
},
{
    nmae:"sai",
    marks3:57
}]
let maxMarks=0;
let topper=""
for(let person of persons){
    if(person.Marks>maxMarks){
    topper=person.name;
    maxMarks=person.marks;
}
}
console.log(`topper is ${topper} and he got ${maxMarks}`)


