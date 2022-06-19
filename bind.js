let komal={
    firstName:"komal",
    lastName:"bobade",
    printName:function(){
        console.log(this.firstName + this.lastName)
    }
}

komal.printName()
console.log(komal.printName)
let printName2=komal.printName;

// // Program

// let komal2={
//     firstName:"komal",
//     lastName:"bobade",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// komal2.displayName()
// console.log(komal2.displayName)

// //function(){
    
//     console.log(this.firstName + this.lastName)


// // let a=komal2.displayName
// // let ab=function(){
// //     console.log(this.firstName + this.lastName)
// // }
// // ab()

// let arjun={
//     firstName:"arjun ",
//     lastName:"thorat"
// }
// let ram={
//     firstName:"ram",
//     lastName:"gaikwad"
// }
// let displayName=function(){
//     console.log(this.firstName + " "+this.lastName)
// }
// let fn=displayName.bind(ram)
// fn()

// displayName.bind(arjun)()
// function add(){
//     return function(){
//         console.log("Hello")
//     }
// }
// add()()

// // Program

// function displayName3(){
//     console.log(`Hi ${this.firstName}${this.lastName}`)
// }

// let payal={
//     firstName:"payal",
//     lastName:"bobade"
// }
//  let sonali={
//      firstName:"sonali",
//      lastName:"bhosale"
//  }
//  displayName3.call(payal)
//  displayName3.call(sonali)

//  //Apply Method

//  let displayName4=function(greet){
//      console.log(`${greet}${this.firstName}${this.lastName}`)
//  }
//  let shubam={
//      firstName:"shubham",
//      lastName:"gaikwad"
//  }
//  let dipa={
//      firstName:"dipa",
//      lastName:"thorat"
//  }
//  displayName4.apply(shubam,['Good Morning..'])

//  //Program 2nd
//  let b={
//      firstName:"komal",
//      lastName:"bobade",
//      displayName:function(){
//          console.log(this)
//          console.log(this.firstName,this.lastName)
//      }
//  }
//  b.displayName()

//  let c={
//      firstName:"krushna",
//      lastName:"thorat",
//      displayName:()=>{
//          console.log(this)
//          console.log(this.firstName + this.lastName)
//      }
//  }
//  c.displayName()


// for (let i=0;i<5;i++){
//     console.log(i)
// }

// for (let i=5;i>0;i--){
//     console.log(i)

// }
// console.log('**********************')
// i=0;
// while(i<5){
//     console.log(i)
//     i++
// }

// i=5;
// while(i>0){
//     console.log(i)
//     i--
// }

// i=5;
// while(i<0){
//     if(i==3){
//         break
//     }
//     console.log(i)
//     i++
// }

