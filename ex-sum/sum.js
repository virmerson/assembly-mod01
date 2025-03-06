const n1 =  document.getElementById("n1");
const n2 =  document.getElementById("n2");
const btnSum = document.getElementById("btnSum");
const result = document.getElementById("result")

btnSum.addEventListener('click', ()=>{
    let v1 = parseFloat(n1.value);
    let v2 =  parseFloat(n2.value);
    let sum = v1+v2;
    result.innerText = sum

    //result.innerText =  parseFloat(n1.value) + parseFloat(n2.value);
 
})


