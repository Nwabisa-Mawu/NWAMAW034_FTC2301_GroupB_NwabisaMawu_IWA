Nwabisa Mawu IWA_14: Types of functions

Technologies used: JavaScript HTML

<b>Challenge 1</b>

Why did the original code not work?
- There were no const or let keywords used in the variable declarations for firstName, age and hobby.
- The variable named hobby uses the same name as the nameof the function that is called at the end.
- The logTwice function has no parameters specified in the closed brackets but one is placed in the console log statement.
- The console log statement is missing the .log() function.
- In the hobby function, the logTwice function is called with strings inside but logTwice has no parameters specified.

What changes did you need to make to achieve the intended behaviour?
- I added the const keyword to the three variables at the top.
- I added the .log() function to the console statement, then I replaced the parameter word with the string to be printed for both console.log statements.
- I changed the function declaration to an arrow function expression then removed the string inside the logTwice() function.
- I changed the name of the hobby function to wholeSentence because the name has already been used for a variable.

<b>Challenge 2</b>

Why did the original code not work?
- The add and multiply functions were missing initializer keyword const, and there was the function keyword and the arrow function and these cannot be used together.
- The add and multiply functions were missing the return statement for their evaluations.
- The parameters of the add and multiply functions were not placed inside the parameter brackets.
- The variable added inside the internal function did not call the add function correctly, adding a this keyword. The this keyword used to fetch the values of the internal object inside the objects is missing the .internal which will direct it to the numbers to evaluate.
- The return statement of the internal function has this insteadof the multilpied variable which will contain the final answer.
- The multiplied variable has not been declared properly and the this keyword is misused.

What changes did you need to make to achieve the intended behaviour?
- I added the const keyword to the add and multiply arrow functions and enclosed their parameters in brackets.
- I added a return keyword before the evaluation in the curly brackets of the add and multiply function.
- I removed the this keyword in the add function call and then added .internal to all the this.a statements.
- I created a multiplied function and used the multiply function to multiply added value with the c value inside the objects. 
