

let names = ["Virmerson", "Gustavo", "Rafael","André", "Elson","João"]
let data  = ["Maçã", 100, "Uva",200]

// console.log(names)
// console.log(data)

console.log("Primeira:"+ names[0])
console.log(names[1])
console.log(names[2])
console.log(names.length)
console.log("Última:" + names[names.length - 1])

const sum = (n1, n2)=>{
    return n1+n2
}

const sub = (n1,n2)=>{
    return n1-n2
}

const arrFunctions = [sum, sub]

console.log(sum == arrFunctions[0])
console.log(sum == arrFunctions[1])

// let r1=  arrFunctions[0](10, 34)
// console.log(r1)

// let r2 = arrFunctions[1](20,10)
// console.log(r2)

// let r1 = sum (10,34)
// console.log(r1)

// let r2 = sub (20,10)
// console.log(r2)


