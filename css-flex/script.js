const arrGoal = [];

const goalList= document.getElementById("goalList");
const btnAdd= document.getElementById("btnAdd");
const inpDesc = document.getElementById("inpDesc");
const inpHours = document.getElementById("inpHours");

btnAdd.addEventListener('click', ()=>{
    const goal = { description:inpDesc.value , hours: inpHours.value} 
    arrGoal.push(goal)
    renderGoalList()
    clearForm()
})

const renderGoalList=()=>{
   const arrGoalRendered = arrGoal.map( (goal) => `<div> ${goal.description} | ${goal.hours}</div>`   )
   goalList.innerHTML =  arrGoalRendered.join("")
}

const clearForm=()=>{
    inpDesc.value=""
    inpHours.value=""
}




