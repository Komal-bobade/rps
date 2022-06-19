// basic functions
// function without parameter & without return type
function add(){
    console.log(10+10)
}
add()
console.log('**************')

// function with parameter & without return type
function sub(x,y){
    console.log(x-y)
}
sub(20,10)
sub(40,15)
console.log('*************')

// function with parameter & with return type
function mul(x,y){
    return x*y
}
let t=mul(4,5)
console.log(t)
console.log(t+t)
console.log(t-10)
console.log(t*0.10)
console.log('************')

// 3 ways to right function in javascript
// function declaration 
function green(x){
    console.log("Happy "+x)
}
green("family")

// function expression 
let greek=function(x){
    console.log("welcome to "+x)
}
greek("family")
greek("javascript")

// arrow function
let green1=(x)=>{
    console.log("komal "+x)
}
green1("bobade")


// fun declaration 
function komal(x,y){
    console.log(x+y)
}
komal(30,60)

// fun expression
let komal1= function(x,y){
  console.log(x*y)
}
komal1(9,9)


// arrow function
let komal2=(x,y)=>{
    console.log(x/y)
}
komal2(50,5)