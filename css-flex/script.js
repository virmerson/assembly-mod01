const arrGoal = []
let indexEdit = -1
const goalList= document.getElementById("goalList");
const btnAdd= document.getElementById("btnAdd");
const btnCancel= document.getElementById("btnCancel");
const inpDesc = document.getElementById("inpDesc");
const inpHours = document.getElementById("inpHours");
const divMessage = document.getElementById("message");

btnCancel.addEventListener ('click', ()=>{
    resetForm()
})


btnAdd.addEventListener('click', ()=>{
    let formErrors = []


    if( inpDesc.value=="" ){
        formErrors.push('The field description is required!')
    }
    if (inpDesc.value.length<3){
        formErrors.push('The field description needs to have at least 3 characters!')
    }
    if (inpHours.value ==""){
        formErrors.push ('The field hours is required!')
    }

   if (formErrors.length==0){  
        const goal = { description:inpDesc.value , hours: inpHours.value} 
        if (indexEdit==-1){
            arrGoal.push(goal)
        }else{
            arrGoal[indexEdit] =  goal
        }
        renderGoalList()
        resetForm()
        showMessage('Goal saved successfully!')
        //add the css success class to the divMessage
        divMessage.className = 'success'
    }else {
        const errorMessage =  formErrors.join("")
        showMessage( errorMessage   )
        // add the css error class to the divMessage
        divMessage.className = 'error'
    }   
})

let messageTimeout;
const showMessage = (message) => {
    divMessage.innerHTML = message;
    if (messageTimeout) {
        clearTimeout(messageTimeout);
    }

    messageTimeout = setTimeout(() => {
        divMessage.innerHTML = "";

    }, 5000);
};

const renderGoalList=()=>{
   const arrGoalRendered = arrGoal.map( (goal, index) => 
            `<div >
                    <div > ${goal.description} </div>
                    <div> ${goal.hours} </div> 
                    <div> <button onclick='goalDelete(${index})'> Delete </button> </div>
                    <div> <button onclick='goalEdit(${index})'> Edit </button> </div>
            </div>`   )
   goalList.innerHTML =  arrGoalRendered.join("")
}

const goalDelete=(index)=>{
    if (confirm('Are you sure you want to delete this record?')){
        arrGoal.splice(index, 1)
       
        renderGoalList()
        showMessage('Goal deleted successfully!')
    }
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





