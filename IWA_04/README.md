Nwabisa Mawu IWA_04 Challenge solution

Technologies used: HTML JavaScript

Why did the code not work?
- The variables date and status were not properly declared using an assignment operator (=).
- In the first if statement, the first console log declaration was missing a closing parenthesis.
- The console.log values for April and christmas day did not have the month as a string inside the call.
- There were implicit declarations of the date variable inside the if statement.
- The dates and holidays were scattered around the if statement scope 
- The count variable is a constant so the mathematical operation of adding to it will not work. It can only be reassigned a new value in the scope
- The final console.logs were out of scope in the parent scope but they should be in the if statement scope.
- The status variable cannot be used in the if statement.  


What changes were made to get achieve the intended behavior?
- I added assignment oprators to the date and status variables
- I changed the name of status variable to _status because the console said it was deprecated - I understood that to mean it was not recommended.
- Replaced date with the correct months then added the information to the publicHol array.
- I created an array called publicHol containing strings of the months and their holidays and kept it in the parent scope so that it is globally accessible.
- I changes the if statements to if and else if statements for the year=2050 and student and parent scenario.
- For the student and 2050 if statement, I removed the last element of the publicHol array and added the youth day month at the end
- In each if statement, I let the new count value equal the length of the new array.

