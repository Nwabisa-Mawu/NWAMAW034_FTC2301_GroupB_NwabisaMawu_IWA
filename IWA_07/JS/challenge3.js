const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owedNumber = (((parseFloat(leoBalance) + parseFloat(sarahBalance)) * -1).toFixed(2))

/*to create spaces in the total amount owed, I turned the 
owed number value to a string then created another variable owedAmount
that uses the `` string quotes to create space inside that string */
const owedString = String(owedNumber);
const owedAmount = `${owedString.slice(0, 2)} ${owedString.slice(2)}`
const owed = 'R ' + owedAmount


// I think the space in the sarah string should be in the surname- so I fixed it
const leo = `${leoName} ${leoSurname} (Owed R ${(parseFloat(leoBalance) * -1).toFixed(2)})`
const sarahName1 = 'Sarah'
const sarahSurname1 = 'Kleinhans    '
const sarah = `${sarahName1} ${sarahSurname1}(Owed R ${(parseFloat(sarahBalance) * -1).toFixed(2)})`
const total = "Total amount owed:"
const result = `
${leo}
${sarah}

${divider} 
  ${total} ${owed} 
${divider}`

console.log(result);

