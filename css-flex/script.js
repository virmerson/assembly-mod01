const arrGoal = []
let indexEdit = -1
const goalList= document.getElementById("goalList");
const btnAdd= document.getElementById("btnAdd");
const btnCancel= document.getElementById("btnCancel");
const inpDesc = document.getElementById("inpDesc");
const inpHours = document.getElementById("inpHours");

btnCancel.addEventListener ('click', ()=>{
    resetForm()
})

btnAdd.addEventListener('click', ()=>{
    const goal = { description:inpDesc.value , hours: inpHours.value} 
   
    if (indexEdit==-1){
        arrGoal.push(goal)
    }else{
       arrGoal[indexEdit] =  goal

    }
   
    renderGoalList()
    resetForm()
})

const renderGoalList=()=>{
   const arrGoalRendered = arrGoal.map( (goal, index) => 
            `<div>
                    <div> ${goal.description} </div>
                    <div> ${goal.hours} </div> 
                    <div> <button onclick='goalDelete(${index})'> Delete </button> </div>
                    <div> <button onclick='goalEdit(${index})'> Edit </button> </div>
            </div>`   )
   goalList.innerHTML =  arrGoalRendered.join("")
}

const goalDelete=(index)=>{
   arrGoal.splice(index, 1)
   renderGoalList()
}

const goalEdit=(index)=>{
    indexEdit = index

    let selectedGoal = arrGoal[index]
    
    inpDesc.value =  selectedGoal.description
    inpHours.value =  selectedGoal.hours

    btnCancel.className = 'visible'
    btnAdd.innerText = 'Update'

}

const resetForm=()=>{
    indexEdit = -1
    inpDesc.value=""
    inpHours.value=""
    btnAdd.innerText ='Add'
    btnCancel.className= 'invisible'
}





