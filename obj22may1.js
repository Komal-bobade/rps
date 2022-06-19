let komal={
    firstname:"komal",
    lastname:"bobade",
    age:23,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
console.log(komal.firstname)
komal.age=22
komal.city="pune"
delete komal.city
console.log(komal)

komal.calBirthYear()

komal={
    firstname:"komal",
    lastname:"bobade",
    age:23,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
arjun={
    firstname:"arjun",
    lastname:"thorat",
    age:23,
    calBirthYear:function(){
        console.log(2022-this.age)
    }
}
arjun.calBirthYear()

// Function constructor
let Person=function(fn,ln){
    this.firstname=fn
    this.lastname=ln
}
let komal1 =new Person("komal","bobade")
console.log(komal) 

komal1.firstname="ram"
komal1.lastname="gaikwad"
console.log(komal1)

// Function constructor
let Person2=function(fn,ln,ag,rn,skills){
    this.firstname=fn
    this.lastname=ln
    this.age=ag
    this.rollno=rn
    this.skills=skills
}
let ram=new Person2("ram","das",22,12,["java","python"])
let krish=new Person2("krish","thorat",23,12,["java1","python1"])
console.log(ram)
console.log(krish)
console.log(ram instanceof Person2)
console.log(ram.__proto__===Person2.prototype)