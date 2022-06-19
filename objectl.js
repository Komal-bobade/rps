let komal={
    firstname:"komal",
    lastname:"bobade",
    age:23,
    rollno:05
}

let krish={
    firstname:"krishna",
    lastname:"thorat",
    age:11,
    rollno:45
}
 let pinku={
     firstname:"payal",
     lastname:"bobade",
     age:18,
     rollno:56
 }

 class Person{
     firstname=undefined
     lastname=undefined
     age=undefined
     rollno=undefined
 }

 let krish1=new Person()
 console.log(krish1)
 krish1.firstname="krish"
 krish1.age="12"
console.log(krish1)

// Constructor are used to set the property value at the time of object creation 

class Person2{
    constructor(fn,ln,ag,rn){
        this.fullname=fn
        this.lastname=ln
        this.age=ag
        this.rollno=rn
    }
}
let komal2=new Person2("komal","bobade",23,22)
console.log(komal2)

// By using set method
class Person3{
    setAge(ag){
        this.age=ag
    }
    setRn(rn){
        this.rollno=rn
    }
    setFirstName(fn){
        this.firstname=fn
    }
    setLastName(ln){
        this.lastname=ln
    }
}

let komal3=new Person3()
console.log(komal3)
komal3.setAge=23
komal3.setFirstName="ram"
komal3.setLastName="gaikwad"
komal3.setRn=56
console.log(komal3)

// Set Map 

let carOne={
    color:"red",
    name:"audi",
    type:"sedane"
}

let carTwo={
    color:"black",
    name:"bmw",
    type:"sedane"
}

// setting the value outside the class

class Car{
    color=undefined
    type=undefined
    name=undefined
}
let audi=new Car()
let bmw=new Car()
console.log(audi)
console.log(bmw)