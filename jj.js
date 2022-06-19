let state=["maharashtra","goa","uttarpradesh"]
console.log(state.length)

for(let i=0;i<state.length;i++){
    console.log(state[i])
}
console.log('.............................')

for(let i=2;i>=0;i--)
{
    console.log(state[i])
}



// program first
let years=[2000,2004,2007]
let age=[]
for(let i=0;i<years.length;i++){
  let ageA=2022-years[i]
  age.push(ageA)
}
console.log(age)


// program Second
let numbers=[2,4,33,15,6,9,23,43,12]
let aa=[]
for(let i=0;i<numbers.length;i++){
  if(numbers[i]>10){
    aa.push(numbers[i])
  }
}
console.log(aa)


// program third
let number=[40,20,10]
let sum=0
for (let i=0;i<number.length;i++){
  sum=sum+number[i]
}
console.log(sum)


// program fourth
let city=["akluj","shripur","nevare"]
for(let i=0;i<city.length;i++){
  console.log("Welcome "+city[i])
}



