console.log(8==='8')
console.log(8=='8')
console.log(8!=='7')
console.log(8!=='8')

let marks=99
if(marks>90){
    console.log('u got A grade')
}
if(marks>60 && marks<=90){
    console.log('u got B grade')
}
if(marks<60){
    console.log('u got C grade')
}

if(marks>90){
    console.log('u got A grade')
}
else if(marks>60 && marks<=90){
    console.log('u got B grade')
}
else if(marks<60){
    console.log('u got C grade')
}
else{
    console.log('hello..')
}

// Switch case

let city="pune"
switch(city){
    case "pune":
        console.log("MH")
    case "nagpur":
        console.log("q")
    case "bhopal": 
    console.log("mp")
    case "lucknow":
        console.log("up")
    default:
        console.log('Enter correct city..')

}


switch(city){
    case "pune":
        console.log("MH")
        break
    case "nagpur":
        console.log("q")
        break
    case "bhopal": 
    console.log("mp")
    break
    case "lucknow":
        console.log("up")
        break
    default:
        console.log('Enter correct city..')
            

}

// Loops
for(let i=0;i<5;i++){
    console.log(i)
}


//for(let i=10;1>=0;i--){
 //   console.log(i)
//}

// Break keyword
for(let i=0; i<5;i++){
    if(i==2){
        break
    }
    console.log(i)
}

for(let i=0;i<5;i++){
    if(i==2){
        continue
    }
    console.log(i)
}