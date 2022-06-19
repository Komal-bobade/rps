let liList=document.querySelectorAll('li')
let addButton=document.querySelector('button')
let ulList=document.querySelector('ul')
console.log(liList)
console.log(addButton)

// addButton.addEventListener('click',function(){
//     for (let i=0;i<liList.length;i++){
//         liList[i].textContent="Grapes"
//     }
// })

// Program 2
// liList=document.querySelectorAll('li')
// addButton=document.querySelector('button')
// console.log(liList)

// addButton.addEventListener('click',function(){
//     for (let i=0;i<liList.length;i++){
//         liList[i].style.color="red"
//         liList[i].style.backgroundColor="blue"
//     }
// })



// Program 3

ulList.addEventListener('mouseover',function(){
    for(let i=0;i<liList.length;i++){
        liList[i].style.color="red"
    }
})

ulList.addEventListener('mouseout',function(){
    for(let i=0;i<liList.length;i++){
        liList[i].style.color="black"
    }
})