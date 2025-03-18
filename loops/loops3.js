
let cont  = 0 
let total = 0
let ageMeasure = 0

do {
    input =  prompt('Enter the student age:')
    total = total + Number(input)
    wantMore = window.confirm('Would you like to continue?')
    cont = cont + 1
    ageMeasure = total/cont
}while(wantMore==true)





window.alert('Amount:'+ cont + " Age measure:" + ageMeasure)


