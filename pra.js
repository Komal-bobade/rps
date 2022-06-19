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
        console.log('Hello')
    }
}

let krish =new Father("krish","thorat")
console.log(krish)

console.log('**********************************************')

// class Grandfather1{
//     constructor(fn,ln){
//         this.firstname=fn
//         this.lastname=ln
//     }
//     display(){
//         console.log(this.firstname+" "+this.lastname)
//     }
// }

// class Father1 extends Grandfather1{
//     constructor(gFatherName,lastname,fFirstname){
//         super(gFatherName,lastname)
//         this.fFirstname=fFirstname
//     }
//     display(){
//         console.log(this.fFirstname+this.lastname)
//           super.display()
//     }
// }

// let Arjun1=new Father1("Ramchandra","Komal","Bobade")
// console.log(Arjun1.firstname)
// console.log(Arjun1.lastname)
// Arjun1.display()