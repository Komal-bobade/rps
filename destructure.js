let array =[11,22,33,44,55]
console.log(array[0])
console.log(array[2])

let a=array[0]
let b=array[4]
let C=array[3]
let d=array[2]

console.log(a)
console.log(b)
console.log(C)
console.log(d)

let [e,f,g,h]=array
console.log(e)
console.log(f)
console.log(g)
console.log(h)

let names=["komal","vaishali","anushka","payal"]
let [aa,bb]=names
console.log(aa)
console.log(bb)

// Object

let obj={
    firstname:"komal",
    lastname:"bobade",
    age:23
}

let {firstname:fs,lastname:ls,age:ag}=obj
console.log(fs)
console.log(ls)
console.log(ag)

let querty={
    firstname:"komal",
    lastname:"bobade",
    skills:["javascript","python"]
}


let  {firstname:fss,lastname:lss,skills:[aaa,bbb]}=querty
console.log(fss)
console.log(lss)
console.log(aaa)
console.log(bbb)


let city=[["pune","nagpur"],["indore","bhopal"]]
let [[as,bs],[ds,ws]]=city
console.log(as)
console.log(bs)
console.log(ws)
console.log(ds)


let country={
    userone:{
        firstname:"komal",
        lastname:"bobade"
    },
    usertwo:{
        firstname:"vaishali",
        lastname:"gaikwad"
    }
}

let {userone:{firstname:ss,lastname:dd},usertwo:{firstname:ww,lastname:ll}}=country
console.log(ss)
console.log(dd)
console.log(ww)
console.log(ll)

let vehicle=[
    {
        type:"sedane",
        color:"pink",
        company:"audi"
    },
    {
        type:"audy",
        color:"blue",
        company:"bmw"
    }
]

let [{type:ty,color:cl,company:cm},{type:ty1,color:cl1,company:cm1}]=vehicle
console.log(ty)
console.log(cl)
console.log(cm)
console.log(ty1)
console.log(cl1)
console.log(cm1)

// Spread Operator and rest operator

function add(...arr){
    let qrt=arr.reduce(function(acc,el){
        return acc + el
    },0)
    return qrt
}
let qrtt=add(10,20,30,40,50)
console.log(qrtt)