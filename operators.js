//arithmetic opeartors

let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//assignment opeartors
let z=5;
z+=3;
console.log(z)
z*=1;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparsion operators

let a=10,b="10";

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)

//logical operators

let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//string operators

let firstName="Konchada"
let lastName="Kusuma"
let fullName=firstName+""+lastName;
console.log(fullName)

let correctName=`Hello ${firstName} ${lastName},welcome to dev astra`
console.log(correctName)

//ternary operator
let myAge=19
if(myAge>18){
    console.log("eligible to vote")
}
else{
    console.log("you cannot vote")
}
let result=myAge>=18 ? "eligible to vote":"you cannot to vote"

//increment and decrement opeartors

let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operators
console.log(typeof count)
console.log(typeof "kusuma")
console.log(typeof 18)