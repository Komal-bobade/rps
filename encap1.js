class Person{
    constructor(name,age,salary){
        this.name
        this.age
        this.salary
    }
    upadeName(nm){
        this.name=nm
    }
    updatAge(ag){
        this.age=ag
    }
    upadeSalary(sl){
        this.salary=sl
    }
    getName(nm){
        return this.name
    }
    getAge(ag){
        return this.age
    }
    getSalary(sl){
        return this.salary
    }
}
 let Arjun=new Person("Arjun Thorat",23,80000)

const printName=function(){
    let firstName="komal"
    let lastName="bobade"

    let printFullName=function(){
        console.log(firstName+" "+lastName)
    }
    return printFullName
}
printName()()

const printName1=function(){
    let firstName="Arjun"
    let lastName="thorat"

    let printFullName=function(){
        console.log(firstName+" "+lastName)
    }
    return printFullName
}
printName1()()

class Person1{
    constructor(){
        let firstName="payal"
        let lastName="bobade"
        this.printName=function(){
            console.log(firstName+" "+lastName)
        }
    }
}
let a=new Person1()
a.printName()
// //console.log(firstName)
// //console.log(lastName)

class Person2{
    constructor(firstName,lastName){
        this._firstName=firstName
        this._lastName=lastName
        this.printName=function(){
            return this._firstName+" "+this._lastName
        }
    }
}
let ram= new Person2("ram","Gaikwad")
console.log(ram.printName())

class Person4{
    constructor(firstName,lastName){
        this._firstName=firstName
        this._lastName=lastName
        this.printName=function(){
            return this._firstName+" "+this._lastName
        }
    }
}
let shubham=new Person4("shubham","gaikwad")
console.log(shubham.printName())


const printName4=function(){
    let firstName="sita"
    let lastName="more"
    let printFullName=function(){
        console.log(firstName+" "+lastName)
    }
    return printFullName
}
printName4()()

class Person5{
    constructor(firstName,lastName){
        this._firstName=firstName
        this._lastName=lastName
        this.printName=function(){
            return this._firstName+" "+this._lastName        }
        }
    }

let q=new Person5("gita","thakur")
console.log(q.printName())

// class Person3{
//     constructor(firstName,lastName){
//         this._firstName=firstName
//         this._lastName=lastName
//         this.printName=function(){
//             return this._firstName+ " "+this._lastName
//         }
//     }
// }
// let amruta=new Person3("amruta","patil")
// console.log(amruta.printName())
















