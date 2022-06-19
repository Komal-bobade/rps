let name="komal"
let midname="ramchandra"
let lastname="bobade"
console.log(name,midname,lastname)


// String
let city="Mumbai"
console.log(city[0])
console.log(city.length)


let country="India"
console.log(country.length)
console.log(country[country.length-1])

let fruit="Apple"
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i])
}


// Methods

let subject="English"
let a=subject.toUpperCase()
console.log(a)

let subject2="JANASCRIPT"
let b=subject2.toLocaleLowerCase()
console.log(b)

let subject3="python"
let c=subject3.includes('on')
console.log(c)

let subject4="marathi"
let d=subject4.startsWith("ma")
console.log(d)

let subject5="algebra"
let e=subject5.endsWith("Ra")
console.log(e)