Nwabisa Mawu IWA_12: Style object

Technologies used: JavaScript HTML

Why did the original code not work?
- For all of the function declarations, the assignment operator was before the variable name not after.
- the if statements in the calcUser function did not have their expression wrapped in curly brackets.
- the return value for the logCalc function was not expressed correctly and used the strict comparison operators instead of reassigning the calcualted variable to a new value.
- the equation of the new value of calculated inside the logCalc function was not parsed using the parseInt method to ensure that the number can be added to +2, and the result should be 3 not 2 so the 1 became a 2.
- the typeof method is used in the isString variable but it should just be a string that can be evaluated in the next variable.


What changes did you need to make to achieve the intended behaviour?
- For all the function decalarations, I moved the assignment operator to between the variable name and the parameter brackets.
- I wrapped the if statement expressions in curly brackets and changed it to an if else statement and added the state= 'idle' condition in there.
- I changed the reassigned calculated variable by replacing the strict comparison operator with an assignment operator then wrapped the calculatedAsNumber variable in a parseInt function to change it to a number that can be added to 2.
- I removed the "numerical-string" string and replaced it with the calculated variable inside the typeof method because it will evaluate whether the value of calculate is a string then that can be true/false for the calculatedAsNumber variable.
- I removed the user and && from the if statement condition because we only want to check if the state is 'requesting', not the value of the user variable.
- The value of the logCalc function was not showing up in the scope of the next funxtion so I created a new variable and assigned it the value of the logCalc function and used that in the calcUser function.