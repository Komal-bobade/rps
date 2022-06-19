let ages=[11,22,33]
let birthyear=[]
for(let i=0;i<ages.length;i++){
    let by=2022-ages[i]
    birthyear.push(by)
}
console.log(birthyear)

// Map method
let a=ages.map(function(el){
    return 2022-el
})
console.log(a)


let at=[11,22,33]
let bb=at.map(function(el){
    return el + 2
})
console.log(bb)

// program 2nd
let num=[22,12,33,44,55,65,43,23,56]
let above40=[]
for(let i=0;i<num.length;i++){
    if(num[i]>40){
        above40.push(num[i])
    }
}
console.log(above40)
// using filter method()
//filter method()
//let x=num.filter(function(el,index,arr){
  // return el > 40
//})
//console.log(x)


let n=[55,66,3,41,43,65,76,23,14,52]
let g=n.filter(function(el){
    return el > 50
})
console.log(g)

// proegram 3rd
let su=[34,56,32]
let total=0
for (let i=0;i<su.length;i++){
    total=total+su[i]
}
console.log(total)

// ueing reduce method()
let p=su.reduce(function(acc,el){
    return acc+el
},0)
console.log(p)

// program 4th
let names=["komal","anu","pinku"]
for(let i=0;i<names.length;i++){
    console.log("Hello "+names[i])
}

// using forEach method()
let r=names.forEach(function(el){
    console.log('happy birthday '+el)
})