let komal={
    firstName:"Komal",
    lastName:"Bobade",
    age:23,
    rollNo:5
}
console.log(komal)


// Function Constructor

let Person=function(firstName,lastName,age,rollNo){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.rollNo=rollNo
}

let arjun=new Person("arjun","thorat",15,66)
console.log(arjun)

// Es6 class

class person2{
    constructor(firstName,lastName,age,rollNo){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.rollNo=rollNo
    }
}

let krish=new person2("krishna","thorat",12,11)
console.log(krish)


// Object Create
let ram=Object.create({})
console.log(ram)

// Add
ram.firstName="ram"
ram.lastName="Gaikwad"
ram.age=4
ram.rollNo=10
console.log(ram)

// Object create method with prototype

let pro={
    cal:function(){
        console.log(2020-1989)
    }
}

let dips = Object.create(pro)
dips.cal()
console.log(dips)
console.log(dips.__proto__)

let pro1={
    cal(){
        console.log(2022-1988)
    },
    init(firstName,lastName,age,rollNo){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.rollNo=rollNo
    }
}
let pinku=Object.create(pro1)
pinku.init("payal","bobade",18,11)
console.log(pro1)

class bank{
    static greet(){
        console.log("Welcome to our bank")
    }
}
bank.greet()

// Revision 
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

for (let i=0;i<5;i++){
    console.log(i)
}

for (let i=0;i<5;i++){
    if(i==2){
        break
    }
    console.log(i)
}

for (let i=0;i<5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}
console.log('**************')

let i=0
while(i<9){
    console.log(i)
    i++
}
console.log('**************')

let d=0
while(d<5){
    if(d==3){
        break
    }
    console.log(d)
    d++
}
console.log('**************')
let g2=5
while(g2>=0){
    if(g2==2){
        g2--
        continue
    }
    console.log(g2)
    g2--
}
console.log('**************')


// let random=Math.floor(Math.random()*6)+1
// console.log(random)
// let usrInput=prompt('Guess the number')
// if(random==usrInput){
//     console.log('Your guess is correct')
// }
// else {
//     console.log('your guess is incorrect')
// }

let random2=Math.floor(Math.random()*6)+1
console.log(random2)
for (let i=0;i<3;i++){
    let usrInput=prompt("Guess the number")
    if(random2==usrInput){
        console.log("Correct guess")
        break
    }
    else{
        console.log('u guess incorrect')
    }
}

let random3=Math.floor(Math.random()*6)+1
console.log(random3)
let usrInput=prompt('Guesss the number')
while(random3!=usrInput){
    usrInput=prompt('Guess the number')
    if(random3==usrInput){
        console.log('correct guess')
        break
    }
    else{
        console.log('u guess incorrect')
    }
}