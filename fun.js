// function without parameter & without return type
function add(){
console.log(10+10)

}
add()
add()

// function with parameter & without return type
function sub(x,y){
  console.log(x-y)

}
sub(30,15)
sub(40,20)

// function with parameter & return type
function mul(x,y){
return x*y
}
let total =mul(9,9)
console.log(total)
console.log(total+total)
console.log(total*0.10)
console.log('..............')

function add(){
  console.log(45+5)
}
add()
add()
console.log('...........')

function addB(x,y){
console.log(x+y)
}
addB(12,3)
addB(45,5)
console.log('...............')

function addition(a,b){
  return a+b
}
let t=addition(5,5)
console.log(t)
console.log(t+t)
console.log(t-5)
console.log(t*0.10)


//3 ways to right the function in javascript


// function declaration
function green(x){
console.log("Welcome to "+x)
}
green("Javascript")

// function expression
let add1= function(x){
  console.log("Welcome to "+x)
}
add1("java")

// arrow function
let greek=(x)=>{
  console.log("komal "+x)
}
greek("bobade ")