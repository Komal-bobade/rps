// Function Es6 class
let Person=function(fn,age,rollno){
    this.fullname=fn
    this.age=age
    this.rollno=rollno
}
Person.prototype.displayName=function(){
    console.log(this.fullname)
}
let amol=new Person("amol",12,23)
console.log(amol)
amol.displayName()

//Es6 class

class Person2{
    constructor(fn,age,rollno){
        this.fullname=fn
        this.age=age
        this.rollno=rollno
    }
    displayName(){
        console.log(this.fullname)
    }
}
let amol2=new Person2("krishna thorat",12,13)
console.log(amol2)

//Es6
class Vehicle{
    color=undefined
    regno=undefined
    city=undefined
}
let audi=new Vehicle()
console.log(audi)
audi.color="red"
audi.regno=123
audi.city="pune"
console.log(audi)

// using constructor
class Vehicle2{
    constructor(color,regno,city){
        this.color=color
        this.regno=regno
        this.city=city
    }
}
let bmw=new Vehicle2("black",123,"pune")
console.log(bmw)

// Set Method

class Vehicle3{
    setColor(cl){
        this.color=cl
    }
    setReg(rg){
        this.rg=rg
    }
    setCity(city){
        this.city=city
    }
}
let maruti=new Vehicle3()
console.log(maruti)
maruti.setCity("pune")
maruti.setColor("pink")
maruti.setReg(466)
console.log(maruti)

class bank{
    constructor(accName,accno,city,bal){
        this.accName=accName,
        this.accno=accno,
        this.city=city,
        this.bal=bal,
        this.transaction=[]
    }

deposit(amount){
    this.bal=this.bal+amount;
    return this.bal;
}
withdrawal(amount){
    if(this.bal>amount){
        this.bal=this.bal-amount
        this.transaction.push(-amount)
        return this.bal
    }
    else{
        console.log("insuficient Amount");
    }
}
lastFiveTransaction(){
    console.log(this.transaction.slice(-5))
}
}
let komal=new bank("komal bobade",123,"pune",1000000000000)
console.log(komal)

komal.withdrawal(1000000000)
komal.deposit(1999)


