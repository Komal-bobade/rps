let numbers=[1,22,333,4444,55555,666666]
console.log(numbers[0])
console.log(numbers[5])
console.log(numbers.length)
console.log("******************")


for(let i=0;i<=5;i++){
    console.log(i)
}

let state=["maharashtra","goa","uttarpradesh","up"]
console.log(state.length)

for(let i=0;i<state.length;i++){
    console.log(state[i])
}

for(let i=state.length;i>=0;i--){
    console.log(state[i])
}

// indexOf()
let names=["komal","pinku","anu","sona","mona"]
aa=names.indexOf("pinku")
console.log(aa)

 //sort()
let bb=names.sort()
console.log(bb)

// join()

let info=["komal","bobade",8329435663]
let cc=info.join("----")
console.log(cc)

