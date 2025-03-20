const inpNumber = document.getElementById("inpNumber")
const btnAdd = document.getElementById("btnAdd")
const divResult = document.getElementById("divResult")

let sum = 0 
let count = 0
let average = 0 
let largest = 0
let smallest = 0

btnAdd.addEventListener('click', ()=>{

    const num = parseFloat(inpNumber.value)
    sum = sum + num
    count = count + 1
    average =  sum / count

    if (count==1){
        largest = num
        smallest = num
    }else if (num>largest){
        largest = num
    }else if (num<smallest){
        smallest = num
    }

    divResult.innerHTML =  `Average: ${average} Largest: ${largest} Smallest: ${smallest}`

})