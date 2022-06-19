// Program One
class Grandfather{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
display(){
    console.log(this.firstname+" "+this.lastname)
    }
}

class Father extends Grandfather{
    greet(){
        console.log("hello")
    }
}
let krish=new Father("krish","thorat")
console.log(krish)
console.log(krish.lastname)
krish.display()
krish.greet()

let Arjun=new Grandfather("arjun","thorat")
console.log(Arjun)
Arjun.display()


// Program Second

class Grandfather1{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
    display(){
        console.log(this.firstname+" "+this.lastname)
    }
}
class Father1 extends Grandfather1{
    constructor(gfatherName,lastname,fFirstName){
        super(gfatherName,lastname)
        this.fFirstName=fFirstName
    }
    display(){
        console.log(this.fFirstName+this.lastname)
        super.display()
    
    }
}

let Arjun1=new Father1("ramchandra","bobade","komal")
console.log(Arjun1.firstname)
console.log(Arjun1.fFirstName)
console.log(Arjun1.lastname)
Arjun1.display()

//  Program Three
class Student{
    constructor(fn,ln){
        this.firstname=fn
        this.lastname=ln
    }
    displayName(){
        console.log(this.firstname+" "+this.lastname)
    }
}
class Teacher extends Student{
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary=salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

class Professor extends Teacher{
    constructor(fn,ln,salary,spec){
        super(fn,ln,salary)
        this.spec=spec
    }
    displaySpec(){
        console.log(this.spec)
    }
}
let komal = new Professor("komal","bobade",50000,"java")
console.log(komal.spec)
console.log(komal.salary)
console.log(komal.firstname)
komal.displayName()
komal.displaySalary()
komal.displaySpec()