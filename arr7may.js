function add(x,y){
    console.log(x+y)
}
add(13,14)

let x=10
console.log(x)

let addition=function(x,y){
    console.log(x+y)
}
addition(12,13)
console.log(addition)

let substraction=function(x,y){
    return x-y
}
function substractionsecond(fn){
    let rr=fn(40,5)
    return rr
}

let rrt=substractionsecond(substraction)
console.log(rrt)

/************************************************/
function returnStory(){
    return 33
}
let d =returnStory()
console.log(d)

function returnStory1(){
    return "komal bobade"
}
let dd =returnStory1()
console.log(dd[0])


function returnStory2(){
    return [11,22,33,44,55]
}
let aa=returnStory2()
console.log(aa[aa.length-1])


function returnStory3(){
    return {
        firstname:"komal",
        lastname:"bobade"
    }
}
let rr=returnStory3()
for (let key in rr){
    console.log(key,rr[key])
}

function addition3(){
    let x=function(){
        console.log('hello')
    }
    return x
}
let f=addition3()
f()


