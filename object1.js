let info={
    firstname:"komal",
    lastname:"bobade",
    rollno:5,
    age:23
}
console.log(info.age)
console.log(info.firstname)

// Add dot notation and bracket notation
info.firstname="pinku"
info.city="mumbai"
info['lang']="python"
console.log(info)

// update (dot notation and bracket notation)
info.firstname='ANU'
info['age']=1
console.log(info)

// Delete (Dot notation and bracket notation)
delete info.lang
delete info['city']
console.log(info)

// Object 3

let vehicle={
    name:'Audi',
    color:'blue'
}


// dot notation 
console.log(vehicle.name)

// Add 
vehicle.type='seddane'
console.log(vehicle)

// Delete
delete vehicle.type
console.log(vehicle)

// bracket notation
console.log(vehicle['name'])

// Update
vehicle['name']='BMW'
console.log(vehicle)

// Delete
delete vehicle['color']
console.log(vehicle)

// Update
vehicle['type']='suv'
console.log(vehicle)

// Array

let info2={
    firstname:"komal bobade",
    firstname:"Anushka bhosale"
}
console.log(info2)


let info3={
    firstname:"komal bobade",
    lastname:"bobade",
    age:23,
    rollno:05
}
console.log(info3)

// dot notation does not work with loop

for (let key in info3)
{
console.log(key,info3[key])
}





