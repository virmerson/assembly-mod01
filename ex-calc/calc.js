const n1 =  document.getElementById("n1");
const n2 =  document.getElementById("n2");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnMul = document.getElementById("btnMul");
const result = document.getElementById("result")

btnSum.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1+v2;
    result.innerText = sum 
})

btnSub.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1 - v2;
    result.innerText = sum 
})

btnDiv.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1/v2;
    result.innerText = sum 
})

btnMul.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1*v2;
    result.innerText = sum 
})

