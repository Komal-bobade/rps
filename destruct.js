let a=10;
let b=20;
[a,b]=[b,a];
console.log(a)
console.log(b)

let names=["Arjun","Komal","Pinku"]
let[d,e,f]=names
console.log(d)
console.log(e)
console.log(f)

// Program 2
let cities=[["nagpur","solapur"],"banglore","bhopal"]
let[[aa,bb],cc,dd]=cities
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

let x=1
let y=2
console.log(x)
console.log(y)

let temp;
temp=x;
x=y;
y=temp;
console.log(x)
console.log(y)

// Object destructure

let Person={
    firstName:"komal",
    lastName:"bobade"
}
let{firstName:fn,lastName:ln}=Person
console.log(fn)
console.log(ln)

// Combination

let Students=[
    {
        fullName:"Arjun",
        marks:90
    },
    {
        fullName:"Krishna",
        marks:88
    }
]
let [{fullName:fm,marks:mk1},{fullName:fm1,marks:mk}]=Students
console.log(fm)
console.log(mk1)
console.log(fm1)
console.log(mk)


// Object Array
let obj={
    skills:[34,35,36],
    skills1:[44,45,46]
}
let {skills:[mm,nn,oo],skills1:[pp,qq,rr]}=obj
console.log(mm)
console.log(nn)
console.log(oo)
console.log(pp)
console.log(qq)
console.log(rr)

let info={
    parents:{
        father:"Ramchandra",
        mother:"Sadhana"
    }
}
let {parents:{father:fr,mother:mr}}=info
console.log(fr)
console.log(mr)