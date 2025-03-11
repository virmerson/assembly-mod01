const n1 =  document.getElementById("n1");
const n2 =  document.getElementById("n2");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnMul = document.getElementById("btnMul");
const result = document.getElementById("result")


//Functions

btnSum.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1+v2; //criar e substituir por uma function fSum 
    result.innerText = sum 
})

btnSub.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1 - v2; //criar e substituir por uma function fSub
    result.innerText = sum 
})

btnDiv.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1/v2; //criar e subtituir por uma function fDiv 
    result.innerText = sum 
})

btnMul.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1*v2; //criar e substituir por uma function fMul 
    result.innerText = sum 
})

