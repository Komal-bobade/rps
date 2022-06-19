let names=["dipa","komal","anu","sona"]
console.log(names[2])
console.log(names[0])
console.log(names.length)
console.log('.....................')


let a=names.length
console.log(a)
console.log(names[names.length-2])

let numbers=[1,22,333,4444,55555,666666]
console.log(numbers[1])
console.log(numbers.length)
console.log('****************')

//loop

for(let i=0;i<5;i++){
console.log(i)
}
console.log('..................................')


let city=["pune","delhi","mumbai","nashik"]
console.log(city.length)
console.log(city[0])

for(let i=0;i<city.length;i++){
    console.log(city[i])
}
console.log('.................')

for(let i=3;i>=0;i--){
    console.log(city[i])
}
console.log('...............................................')

// indexOf method
let state=["maharashtra","goa","gujrat"]
let aa=state.indexOf("goa")
console.log(aa)

// sort
let bb=state.sort()
console.log(bb)

// join()
let info=[101,"komal","bobade"]
let cc=info.join(" ")
console.log(cc)
