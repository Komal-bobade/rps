  let person={
      fullname:"komal",
      age:23,
      skills:["python","javascript"],
      city:"pune"
  }
  // Retrive
  console.log(person.fullname)
  console.log(person['fullname'])

  // Update
  person.age=22
  person['age']=25
  console.log(person)

  //Add
  person.lang="hindi"
  person['lang']="marathi"
  console.log(person)

  // Add skill to array
  person.skills.push('html')
  person['skills'].push('java')
  console.log(person)

  // Delete property 
  delete person.lang
  delete person['city']
  console.log(person)

  //*------------------------------*/
  person={
      fullname:"komal",
    age:23,
    skills:["python","javascript"],
    city:"pune"  
    
    }
    for (let key in person){
        console.log(key,person[key])
    }


    let student=[
               {
                 fullname:"komal bobade",
                 city:"pune",
                 skills:["html","css","javascript",]

               },
               {
                   fullname:"sarika pansare",
                   city:"jaipur",
                   skills:["html5","css3"]
               },
               {
                   fullname:"poorva vyas",
                   city:"ujjain",
                   skills:["html","python","javascript3","html5"]
               },
               {
                   fullname:"vikas gupta",
                   city:"ujjain",
                   skills:["html5","css3"]
               }
    ]



    // Problem 1 change city to nagpur for komal
    console.log(student[0])
    student[0].city="Nagpur"
    student[0]['city']="Nagpur"
    console.log(student[0])


    // Display number of skills for all users
    for (let i=0;i<student.length;i++){
        console.log(student[i].fullname+":"+student[i].skills.length)
    }

    // forEach
    student.forEach(function(el){
    console.log(el.fullname+":"+el.skills.length)
    })

    // Name of person belong to city ujjain
    student.forEach(function(el){
        if(el.city=="ujjain"){
            console.log(el.fullname)
        }
    })

    let cityUjjainArray=student.filter(function(el){
        return el.city=="ujjain"
    })

    // person belongs to ujjain and knows python
    let rr=student.filter(function(el){
        return el.city=="ujjain"&&el.skills.includes('python')
    })
    rr.forEach(function(el){
        console.log(el.fullname)
    })