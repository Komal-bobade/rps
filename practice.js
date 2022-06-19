// Map method
let num=[34,65,32,87,11]
let ast=num.map(function(el){
    return el *2
})
console.log(ast)

 // Reduce methode
 let number=[34,65,78,33,12]
let ass=number.reduce(function(acc,el){
    return acc+el
    
},0)
console.log(ass)

// foreach method
let name=["komal","anushka","payal"]
let b= name.forEach(function(el){
    console.log("Welcome " +el)
})

let student=[

    {
        firstname:"komal",
        lastname:"bobade",
        age:23,
        Rno:05
    },
    {
        firstname:"payal",
        lastname:"thorat",
        age:21,
        Rno:02
    },
    {
        firstname:"anushka",
        lastname:"bhosale",
        age:15,
        Rno:01
    }
]

// change the age for komal
console.log(student[0])
student[0].age=22
console.log(student[0].age)

// display Rno of all users
for (let i=0;i<student.length;i++){
    console.log(student[i].Rno)
}

// while loop
let k=0
while(k<10){
    console.log(k)
    k++
}

let c=5
while(c>=0){
    if(c==3){
    c--
    continue
    }
    console.log(c)
    c--
}

let d=0
while(d<6){
    if(d==4){
        break
    }
    console.log(d)
     d++
}

// Switch method
let city="gujrat"
switch (city){
    case"pune":
    console.log("mh")
    case"mumbai":
    console.log("thane")
    default:
   
 console.log("enter valid city")
}



// Break
 let city1="goa"
 switch(city1){
    case "goa":
        console.log("India")
         break
    case "mumbai":
         console.log("thane")
         break
    default:
          console.log("enter correct city..")       
 }

// Map method
 let num2=[83,34,23,15,87]
 let ac=num2.map(function(el){
     return el*2
 })

console.log(ac)

// Reduce methode
let num3=[23,45,32,22,65,90]
let as=num3.reduce(function(acc,el){
    return acc+el
},0)
console.log(as)

// foreach method
let names=["arjun","krishna"]
let cc=names.forEach(function(el){
    console.log("How r u "+el)
})

// filter method
let arr=[23,45,43,12,22,65]
let az=arr.filter(function(el){
    return el > 40
})
console.log(az)

// Filter method
let p=[23,-56,67,-89,-45,66,-88,89]
let withdrawl=p.filter(function(el){
    return el > 0
}) 

let deposit=p.filter(function(el){
    return el < 0
})
console.log(withdrawl)
console.log(deposit)

// Map method
let num5=[12,23,45,67,54,33]
let ab=num5.map(function(el){
    return el + 2
})
console.log(ab)

// reduce method
let num6=[88,67,45,34,65,12]
let am=num6.reduce(function( acc,el){
    return acc + el
},0)
console.log(am)

// foreach
let namess=["komal","dipali"]
let dd=namess.forEach(function(el){
    console.log("Welcome "+el)
})

// filter method
let num7=[23,-45,44,-67,20,12,-90]
let ak=num7.filter(function(el){
    return el > 0
})
console.log(ak)

let al=num7.filter(function(el){
    return el < 0
})
console.log(al)

let an=num7.filter(function(el){
    return el > 10
})
console.log(an)


