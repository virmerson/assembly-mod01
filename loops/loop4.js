
let wantMore=false
do {
    const input = prompt('Enter a number:')
    const num = parseFloat(input)

    if (isNaN(num)){
        console.log('Invalid input')
    }else {
        
        switch(true){
            case(num>0):
                console.log('Switch: The number is positive')
                break
            case(num < 0):
                console.log('Switch: The number is negative')
                break
            case(num===0):
                console.log('Switch: The number is zero')
                break
            default:
                console.log('Switch: Invalid input')
        }
    }

   wantMore =  window.confirm('Would you like to enter another number?')

}while(wantMore)