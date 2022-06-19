let pinku={
    firsname:"pinku",
    lastname:"bobade",
    age:21,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
console.log(pinku['firsname'])
pinku['age']=21
pinku['city']="pune"
console.log(pinku)

let krish={
    firsname:"krish",
    lastname:"thorat",
    age:21,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
arjun={
    firstname:"arunj",
    lastname:"thorat",
    age:23,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
arjun.calBirthYear()

// Function Constructor
let Person=function(fn,ln){
    this.firsname=fn
    this.lastname=ln
}

let pinku1=new Person("pinku","bobade")
console.log(pinku1)
pinku1.firsname="Apinku"
pinku1.lastname="Bbobade"
console.log(pinku1)

// Function constructor
let Person2=function(fn,ln,ag,rn){
    this.firsname=fn
    this.lastname=ln
    this.age=ag
    this.rollno=rn
}
let amol=new Person2("komal","bobade",23,12)
let amol1=new Person2("krish","thorat",22,11)
console.log(amol)
console.log(amol1)

Person2=function(fn,ln,ag,rn,skl){
    this.firsname=fn
    this.lastname=ln
    this.age=ag
    this.rollno=rn
    this.skills=skl
    this.numberSkills=function(){
        console.log(this.skill.length)
    }
}
let ram=new Person2("ram","das",22,12,["java","python"])
let ram1=new Person2("ram1","das1",23,11,["java1","python1"])
console.log(ram)
console.log(ram1)

let ramOne={
    fullname:"ram gaikwad",
    age:22,
    city:"pune",
    skill:["python","java"]
}

let ramTwo={
    fullname:"ram1 gaikwad",
    age:23,
    city:"mumbai",
    skill:["javascript","python"]
}
let ram3=new Person2("ram3 ","das",23,"pune",["css","java"])
let ram4=new Person2("ram3 ","das1",12,"mumbai",["css1","java1"])
console.log(ram3)
console.log(ram4)

let Vehicle=function(color,regNo,city,type){
    this.color=color
    this.regNo=regNo
    this.city=city
    this.type=type
    this.colorDisplay=function(){
        console.log(`Car's color is ${this.color}`)
    }
}

let audi=new Vehicle("red",123,"pune","sedane")
let bmw=new Vehicle("black",124,"mumbai","SUV")
console.log(audi)
console.log(bmw)

let Vehicle=function(color,regNo,city,type){
    this.color=color
    this.regNo=regNo
    this.city=city
    this.type=type
}
Vehicle.prototype.colorDisplay=function(){
    console.log(this.color)
}