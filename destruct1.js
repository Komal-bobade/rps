//console.log("Hello")

// Rest parameter

function addition(...arr){
    console.log(arr)

    return arr.reduce(function(acc,el){
        return acc+el
    },0)
}
let aa=addition(12,12,12)
console.log(aa)

// Spread parameter
let number=[11,22,33,44,44]
function addition2(a,b,c){
    console.log(a+b+c)
}
addition2(...number)

let arr=[1,2,3,4]
let arr2=[33,44,55]

let aaa=[...arr,...arr2]
console.log(aaa)


// For of loop
let Person={
    fullName:"Komal",
    lastName:"Bobade",
    age:23,
    rollNo:45
}
for (let key in Person){
    console.log(key,Person[key])
}

// For of for array
let names=["arjun","ram","krish"]
for(let item of names){
    console.log(item)
}

//For of for object
let info={
    fullName:"tanmay",
    lastName:"thorat",
    age:11,
    rollNo:2
}
console.log(Object.keys(info))
console.log(Object.values(info))
console.log(Object.entries(info))

// keys()
for(let item of Object.keys(info)){
    console.log(item)
}

// Values()
for(let item of Object.values(info)){
    console.log(item)
}

// Entries()
for(let [key,value]of Object.entries(info)){
    console.log(key,value)
}

// Ternary Operator

let a=10
let b=20
let rrr=a>b ? "a is greater":"b is greator"
console.log(rrr)
let aaaa=10
// aaaa+
// aaaa=aaaa+1
// aaaa+=1

if (a>b){
    console.log('A is greater')
}
else{
    console.log('B is greater')
}