let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {
    const isString = typeof(calculated);
    const calculatedAsNumber = isString === String? calculated : parseInt(calculated)
    return calculated = parseInt(calculatedAsNumber) + 2;
}

const logCalcValue = logCalc()


const calcUser = () => {
  
  if (logCalcValue > 2) {
  user = 'John' 
  state = 'requesting'
} else {
 let state = 'idle'
}
return state;
}
//This is so that the calcUser function only runs once.

let hasCalcUserBeenCalled = false;
let status = calcUser() 

 const checkUser = () => {
  if (hasCalcUserBeenCalled === false) {
    hasCalcUserBeenCalled = true;

      if (state === 'requesting') {
            console.log(`User: ${user} (${calculated})`)
        } 
}
 }




// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()