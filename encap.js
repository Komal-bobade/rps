class Person{
    constructor(name,age,salary){
        this.name
        this.age
        this.salary
    }
    updateName(nm){
        this.name=nm
    }
    updateAge(ag){
        this.age=ag
    }
    updateSalary(sl){
        this.salary=sl
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getSalary(){
        return this.salary
    }
}
let komal=new Person("komal bobade",23,80000)

// Function
const printName=function(){
    let firstName="komal"
    let lastName="bobade"

    let printFullName=function(){
        console.log(firstName +" "+lastName)
    }
    return printFullName
}
printName()()

const printName1=function(){

    let firstName="krishna"
    let lastName='thorat'
    let printFullName=function(){
        console.log(firstName+" "+lastName)
    }
    return printFullName
}
printName()()

const printName2=function(){
    let firstName="payal"
    let lastName="bobade"
    let printFullName=function(){
        console.log(firstName+" "+lastName)
    }
    return printFullName
}
printName2()()

// Program 3
// class Person2{
//     constructor(){
//         let firstName="arjun"
//         let lastName="thorat"
//         this.printName=function(){
//             console.log(firstName+" "+lastName)
//         }
//     }
// }
// let abc=new Person2()
// abc.printName()
// console.log(firstName)
// console.log(lastName)


class Person3{
    constructor(firstName,lastName){
        this._firstName=firstName
        this._lastName=lastName
        this.printName=function(){
            return this._firstName+ " "+this._lastName
        }
    }
}
let amruta=new Person3("amruta","patil")
console.log(amruta.printName())