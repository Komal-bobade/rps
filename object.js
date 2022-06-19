let info={
    firstName:"komal",
    lastName:"bobade",
    rollNo:5,
    age:23
}
console.log(info.firstName)
console.log(info['rollNo'])

// Add (dot notation & bracket notation)
info.firstName="pinku"
info.lang="marathi"
info["city"]="mumbai"
console.log(info)

// Upade (dot notation and bracket notation)
info.firstName="anu"
info['age']=23
console.log(info)

// Delete(dot notation and bracket notation)
delete info['city']
console.log(info)

// OBJECT 3

let vehicle={
name:"Audi",
color:"blue"
}

// Dot notation
console.log(vehicle.name)

//Update
vehicle.name="BMW"

//Add
vehicle.type="sedane"

//Delete
delete vehicle.type

// Bracket notation
console.log(vehicle['name'])

//Update 
vehicle['name']='Audi1'

// Delete
delete vehicle['color']

vehicle['type']="SUV"


// Array
let names=["komal","pinku","anu"]
console.log(names)

let info2={
fullName:"Komal Bobade",
fullName:"Anu Bhosale"
}
console.log(info2)

let city=["pune","mumbai","nagpur"]
for (let i=0;i<city.length;i++){
    console.log(city[i])
}


let info3={
    fullName:'Komal Bobade',
    age:23,
    skills:["java","python"]
}

// Dot natation does not work with loop

for (let key in info3){
    console.log(key,info3[key])
}



