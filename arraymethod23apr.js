// program one

let ages=[11,13,14]
let birthyear=[]
for(let i=0;i<ages.length;i++){
    let b=2022-ages[i]
    birthyear.push(b)
}
console.log(birthyear)

// map()
let a=ages.map(function(el){
    return 2022-el
}) 
console.log(a)

let ast=[11,22,13]
let b=ast.map(function(el){
    return el + 5
})
console.log(b)

// program second
let numbers=[22,33,12,45,32,65,55,78,9,73]
let above30=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>30){
        above30.push(numbers[i])
    }
}
console.log(above30)

// filter()
let c=numbers.filter(function(el,index,arr){
    return el > 30
})
console.log(c)

let bn=[22,33,44,54,32,21,65,54,87]
let nb= bn.filter(function(el,index,arr){
    return el>50
})
console.log(nb)

// program 3rd
let s=[11,22,33]
let total=0
for(let i=0;i<s.length;i++){
    total=total+s[i]
}
console.log(total)

// using reduce()
let ss=s.reduce(function(acc,el){
    return acc+el
},0)
console.log(ss)

// program 4th
let names=["komal","ram","anu","rita"]
let r=names.forEach(function(el){
    console.log("welcome "+el)
})

// map()
let number=[1,2,3,4,5,6,7,8,9,10]
let are=number.map(function(el,index,arr){
    return el * 2
})
console.log(are)

// filter()
let k=[100,300,450,-40,-222,-654]
let deposit=k.filter(function(el,index,arr){
    return el> 0
})

let withdrawl=k.filter(function(el,index,arr){
    return el< 0
})
console.log(deposit)
console.log(withdrawl)


// reduce()
let d=deposit.reduce(function(acc,el){
    return acc+el
},0)
console.log(d)

let w=withdrawl.reduce(function(acc,el){
    return acc+el
},0)
console.log(w)

// forEach()
let namess=["komal","ram","anu","priya","nita"]
namess.forEach(function(el){
    console.log("Welcome  "+el)
})


// find()
let h=[22,33,44,55,43,21,67,54,87]
let rr=h.filter(function(el){
    return el>50
})
console.log(rr)

let ry=h.findIndex(function(el){
    return el>50
})
console.log(ry)

let j=[11,12,33,22,65,78,43,6,4,]
let y=j.every(function(el,index,arr){
    return el > 10
})
console.log(y)

// slice()
let yy=j.some(function(el,index,arr){
    return el >1000
})
console.log(yy)

let mn=["komal","ram","siya","gita","anu","rina","pinku"]
console.log(mn.slice(2,5))
console.log(mn.slice(2))

// spilce()
let namesay=["komal","anu","ram","riya"]
//namesay.splice(startingIndex,numberOfeletoBeDeleted)
namesay.splice(1,2)
console.log(namesay)

// with replacement
namesay.splice(1,2,"gita","pinku")
console.log(namesay)

// flat()
let numbersh=[[12,23,43],[21,65,88],[76,88,90],[55,64,86]]
console.log(numbersh[0][0])
console.log(numbersh[1][1])
console.log(numbersh[2][2])

let q=numbersh.flat()
console.log(q)

// fill()
let marks=[55,76,88,99,24,84,65,73]
let z=marks.fill('66',2,5)
console.log(z)