let years=[2009,2010,2001,2003,2004]
let age=[]
for(let i=0;i<years.length;i++){
    ageA=2022-years[i]
    age.push(ageA)
}
console.log(age)


// 2nd program

let number=[2,45,33,8,10,9,57,66]
let A=[]
for(let i=0;i<=number.length;i++){
    if(number[i]>=10)
    A.push(number[i])
}
console.log(A)


// 3rd program
let numbers=[200,300,500]
sum=0
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
console.log(sum)


// 4th program
let city=["pune","nashik","mumbai"]
for(let i=0;i<city.length;i++){
    console.log("Welcome to "+city[i])
}


// 5th program
let state=["goa","gujrat","maharashtra","uttar pradesh"]
for(let i=0;i<state.length;i++){
    console.log(state[i])
}
console.log('***********************************')

for(let i=3;i>=0;i--){
    console.log(state[i])
}

