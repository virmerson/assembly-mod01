const btnYear =  document.getElementById("btnYear")
const inpYear =  document.getElementById("inpYear")

btnYear.addEventListener('click', ()=>{
    let year = inpYear.value
    if (year>=2018){
        console.log('You are a kid!')
    }else if ( year>=2010 && year<2019){
        console.log('You are a teenager!')
    }else {
        console.log('You are an adult!')
    }
})

