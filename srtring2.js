let country="India"
console.log(typeof country)
let a=country.toUpperCase()
console.log(a)
console.log(typeof a)

let c=country.toLocaleLowerCase()
console.log(c)

let firstname="komal"
let ab=firstname.toLowerCase().toUpperCase().length
console.log(ab)

let lastname="bobade"
let d=lastname.startsWith("bo")
console.log(d)

let nam="payal"
let g=nam.endsWith("l")
console.log(g)

let lang="hindi"
let b=lang.includes("in")
console.log(b)

let k="  anushka"
console.log(k.length)
let ks=k.trimStart()
console.log(ks)
console.log(ks.length)


let kd="anushka "
console.log(k.length)
let kss=kd.trimEnd()
console.log(kss)
console.log(kss.length)


let km="  anushka  "
console.log(k.length)
let kt=km.trim()
console.log(kt)
console.log(kt.length)


let vegetable="Tomato"
let x=vegetable.indexOf('m')
console.log(x)
let gg=vegetable.indexOf("M")
console.log(gg)


let sd="komal"
let sf=sd.slice(2)
console.log(sf)
let sff=sd.slice(2,3)
console.log(sff)
let sfff=sd.slice(1,-4)
console.log(sfff)
 

