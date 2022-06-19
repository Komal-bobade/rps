// Rest 
function addition(...arr){
    console.log(arr)
    let aa=arr.reduce(function(acc,el){
        return acc + el
    },0)
    return aa
}
let bb=addition(11,45,67,34,23,44,34)
console.log(bb)
function filterValues(a,aaa){
    let querry=aaa.filter(function(el){
        return el>a
    })
    return querry
}
let rrrr= filterValues(12,34,54,67,87,33)
let qqqq=filterValues(23,56,43,67,33,87)
console.log(rrrr)
console.log(qqqq)

let number=[11,22,33,44,55,66,77]
function addFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
addFive(...number)