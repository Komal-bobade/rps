// loops
let birthyear=[2009,2007,2005]
let eges=[]
for(let i=0;i<birthyear.length;i++){
   // console.log(2022-birthyear[i])
    let bage=2022-birthyear[i]
    eges.push(bage)
}
console.log(eges)


// 2nd program
let agec=[11,2,9,2]
let above10=[]
for(let i=0;i<agec.length;i++){
  if (agec[i]>10){
      above10.push(agec[i])
  }
}
 console.log(above10)


 // 3rd program (sum)

 let numbers=[10,30,5]
 let sum=0
 for(let i=0;i<numbers.length;i++){
     sum=sum+numbers[i]
 }
 console.log(sum)


 //4th program
 let city=["pune","mumbai","nashik"]
 for(let i=0;i<city.length;i++){
     console.log('welcome '+city[i])
 }
