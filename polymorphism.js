let WorldBank=class{
    constructor(accName,accNumber,city){
        this.accName=accName
        this.accNumber=accNumber
        this.city
    }
    depoist(){
        console.log('depoist word bank')
    }
    withdrawal(){
        console.log('withdrawl world bank')
    }
}

class SBI extends WorldBank{
    constructor(accName,accNumber,city,IFSC){
        super(accName,accNumber,city)
    this.IFSC=IFSC
}
depoist(){
    console.log('depoist SBI')
    super.depoist()
}
withdrawal(){
    console.log('SBI withdrawl')
   }
}

class PNB extends WorldBank{
    constructor(accName,Acctype,city,IFSC){
        super(accname,Acctype,city);
        this.IFSC=IFSC;
    }
    depoist(){
        console.log('Depoist SBI');
    }
    withdrawal(){
        console.log('SBI withdrawal');
    }
}

let Tulapur=new SBI(1232,"saving tuljapur",5676);
console.log(Tulapur);


// Polymorphism

// function addition(a,b,c,d){
//     if(a!==undefined && b!==undefined && c!==undefined && d!==undefined){
//         console.log(a+b+c+d)
//     }
//     if(a!==undefined && b!==undefined && c!==undefined ){
//         console.log(a+b+c)
//     }
//     if(a!==undefined && b!==undefined){
//         console.log(a+b)
    
//     }

// }

// addition(2,5,4,3)
// addition(3,4,5)
// addition(2,8)

// console.log('*************************************************8')

// class calC{
//     additionA(a,b,c,d){
//     if(a!==undefined && b!==undefined && c!==undefined && d!==undefined){
//         console.log(a+b+c+d)
//     }
//     else if(a!==undefined && b!==undefined && c!==undefined){
//         console.log(a+b+c)
//     }
//     else if(a!==undefined && b!==undefined ){
//         console.log(a+b)
//     }
// }
// }
// let n=new calC()
// n.additionA(1,4)
// n.additionA(1,2,3)
// n.additionA(4,5,6,7)

// console.log('************************************************')

// class WorldBank{
//     depoist(greet){
//         console.log('Welcome to '+greet)
//     }
// }
// class SBIB extends WorldBank{
//     depoist(greet){
//         console.log('Welcome to '+greet+"SBI")
//     }
// }

// let vb=new SBIB()
// vb.depoist('WorldBank')