let numbers=[1,2,3,4,5,6,7,8,9,10] 
let ary=numbers.map(function(el,index,arr){
    return el * 3
})
console.log(ary)<

// filter
//let a=[55,65,-34,23,44,-52,66,-98]
//let deposit=llk.filter(function(el,index,arr){
    //return el > 0
//})
//let withdrawl=a.filter(function(el,index,arr){
   // return el < 0
//})
//console.log(deposit)
console.log(withdrawl)

 reduce()
let total=deposit.reduce(function(acc,el){
    return acc + el
},0)
console.log(total)

/et totala=withdrawl.reduce(function(acc,el){
    return acc + el
},0)
console.log(totala)

forEach()
let name=["puja","komal","rina","riya"]
name.forEach(fun(el){
    console.log("welcome "+el)
})

//find()
let m=[22.30,46,33,54,,65,22,12]
let ee=m.filter(function(el){
   return el>30
})
console.log(ee)

let bb=m.findIndex(function(el){
    return el > 30
})
console.log(bb)


//every()
let u=[11,21,23,43,54,,56,44]
let f=u.every(function(el,index,arr){
    return el>10
})
console.log(f)

let pp=u.some(function(el,index,arr){
    return el > 10
})
console.log(pp)

//slice()
let g=["riya","komal","puja","anu"]
g.slice(start,end())
console.log(g.slice(1,2))