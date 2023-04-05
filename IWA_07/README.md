Nwabisa Mawu IWA_07

<b>Challenge 1</b>

Why did the original code not work?
- '3' is a string so when you add the string to th enumber 4, they are concatenated and not added as numbers.

What changes did you need to make to achieve the intended behaviour?
- I enclosed the value variable in the parseInt function to convert them to numbers OR you could also change the value of the 'value' variable to a number not a string.

<b>Challenge 2</b>

Why did the original code not work?
- The console.log string is enclosed in "" instead of `` for interpolation.
- There are no if statements that evaluate which name is present and how the code should behave.

What changes did you need to make to achieve the intended behaviour?
- I enclosed the console log strings in `` quotations.
- I created an if statement for when the nickname is present, followed by an else if for when the firstname is present and another else if for when the firstname and nickname are unavailable.
- I used else if instead of new if statements for each condition because when they are independent, they are all evaluated and will show the output for the firstname even when the nickname is present.

<b>Challenge 3</b>

Why did the original code not work?
- For the owed variable, the string "R" was placed inside the parseInt function with the numbers to be added. 
   - The parseInt function should not be used because these are values that have decimals so it should be float for the rest of the calculations.
   - The parseFloat funtion should not have both string values being added inside its brackets because they will be concatenated before being converted to a float number.
   - There should be code that turns formats the owed value to create a thousand separator.
- For the leo and sarah variables, 
    - "" string quotes are used but the variable names are warpped in {} used in interpolation and there are \ escapes inside the string that aren't required when using interpolation.
    - There is the sarahBalance variable where there should be the leoBalance variable for leo's information.
    - The balance values should be positive without the - symbol
- For the result variable,
    - There is no interpolation to structure the placement of the variables over multiple lines and the order in which they are placed will not create the desired formation.

What changes did you need to make to achieve the intended behaviour?
- I removed the "R" string from inside the parseInt function to outside, I enclosed leoBalance and sarah balance in their own parseInt functions then added them together.
- To add the thousand separators, I created a variable, owedNumber, where I moved the addition of the balances then I created a variable owedString, where I converted the owedNumber variable to a string. Then I created a variable, owedAmount, where I used interpolation and the slice method to separate the first two numbers of the string from the rest.
- For the balance and owed values, I converted them to floats then I multiplied them by -1 to convert them to positive numbers.
- For the leo and sarah variables, I replaced the "" with `` and added the $ symbol before the {} enclosing the variable names then I removed the \ used to escape the internal "" because they are not required when using interpolation.
- For the result variable, I used interpolation to create a multi-line structure of the the addition of the variables and I fixed the order in which they were placed. 