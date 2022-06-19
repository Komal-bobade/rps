// // Synchronous execution 
function addition(){
    console.log(9+9)
}

function addition2(){
    console.log(9+8)
}
addition()
addition2()

// Asynchronus

function addition3(){
    setTimeout(function(){
        console.log(8+8)
    },2000)

}
function addition4(){
    console.log(6+6)
}
addition3()
addition4()

// Call back hell
function check(){
    setTimeout(function(){
        console.log('user created')
    },3000)
    setTimeout(function(){
        console.log('Id retrived')
    },1000)
    setTimeout(function(){
        console.log('get user by id')
    },2000)
    setTimeout(function(){
        console.log('update uesr by id')
    },4000)
    setTimeout(function(){
        console.log('delete user by id')
    },3000)
}
check()

function check2(){
    setTimeout(()=>{
        console.log('user created')
        setTimeout(function(){
            console.log('id retrives')
            setTimeout(() => {
                console.log('retrive user by id')
                setTimeout(() => {
                    console.log('update user by id')
                    setTimeout(() => {
                        console.log('delete user by id')
                        
                    },1000 )
                    
                },1000 )
            },2000)
        },3000)
    },4000)
}
check2()

let pro = new Promise(function(reslove,reject){
    let a=20
    let b=20
    if(a==b){
        reslove("Hello....")
    }
    else{
        reject ("bye!!")
    }
})
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
}
)

let pro2=new Promise(function(reslove,reject){
    let word="Komal"
    if (word.length>=7){
        reslove(["ram","pinku","krish"])
    }
    else{
        reject([43,22,65])
    }
})
pro2.then(function(arr){
    console.log(arr[0])
},function(arr){
    console.log(arr[0])
}

)

pro2.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[0])
})

