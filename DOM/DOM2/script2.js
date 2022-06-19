let liList=document.querySelectorAll('li')
let addButton=document.querySelector('button')
let ulList=document.querySelector('ul')
console.log(liList)
console.log(addButton)

addButton=addEventListener('click',function(){
    for (let i=0;i<liList.length;i++){
        liList[i].textContent="Mango"
    }
})

let liList=document.querySelector('li')
let addButton=document.querySelector('button')
console.log(liList)

addButton=addEventListener('click',function(){
    for (let i=0;i<liList.length;i++){
        liList[i].style.color="red"
        liList[i].style.backgroundColor="black"
    }
})