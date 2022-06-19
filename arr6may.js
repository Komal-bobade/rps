// number as a parameter to function
function addition(x,y){
    return x + y
}
let a=addition(12,34)
console.log(a)

// String parameter to function
// function countVowels(word){
//     let count=0
//     for(let i=0;i<word.length;i++){
//         word[i]=wrod[i].toLowerCase()
//         if(word[i]=="a"||word[i]=="e"||word[i]=="i"||word[i]=="o"||word[i]=="u"){
//             count=count+1
//         }
//     }
//     return count
// }
// let total=countVowels("komal")
// console.log(total)

// string are immutable ,cannot change single character
let n="komal"
console.log(n[0])
n[0]="a"
n="payal"
console.log(n)



// Array as a parameter to function
let marks=[3,6,9]
function sumAll(arr){
    arr[0]=23
    console.log(arr)

}
console.log(marks)
sumAll(marks)
console.log(marks)


let c=[45,67,89]
let d=c
c[0]=34
d[1]=88
console.log(c)
console.log(d)

let r=[12,22,33]
function sumAll(arr){
    let r=arr.reduce(function(acc,el){
        return acc+ el
    },0)
    return r
}
let q=sumAll(r)
console.log(q)

// Object
let info={
    name:"komal",
    age:23
}
let info2=info
info.name="anushka"
console.log(info2)
console.log(info)

// Object as a parameter to another function 
let info4={
    name:"komal",
    age:23,
    skill:["java","javascript","css"]
}
function printAllobj(obj){
    for(let key in obj){
        console.log(key,info4[key])
    }
}
printAllobj(info4)