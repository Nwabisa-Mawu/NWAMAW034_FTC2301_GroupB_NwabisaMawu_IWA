Nwabisa Mawu IWA_06: Type coercion challenges

Technologies used: JavaScript HTML

<b>Challenge 1:</b>

Why did the original code not work?
- The variables primaryValid and secondaryValid had a comparison that was not valid because the typeof number function contained 'number', a variable that is not declared and so is undefined.
- The equality operator was not strict ===.
- The typeof number variable should not equal the secondaryPhone or primaryPhone value because the purpose of primaryValid/secondaryValid is to check whether the phone numbers are strings that contain numbers 

What changes did you need to make to achieve the intended behaviour?
- I changed the == operator to the strict equality === operator.
- I used isNaN(primaryValid) === false; to check that the value of primaryValid is a number by saying 'primaryValid is not a number must evaluate to false'. This means when it is a number, it will equal true and false if it is not. I did the same for the secondaryValid variable.

<b>Challenge 2:</b>

Why did the original code not work?
- In the condition of the if statement, the hourOfDay variable did not have a comparison and it was not in brackets.
- The different conditions of the statement were not wrapped in a single bracket but were in their individual comparison blocks.
- The tax variable is a string that was not converted when used to convert the tax to a decimal for the taxAsDecimal variable and the 100 number was also in string quotes and not a number type.
- The string '1' had no function in the startingAfterTax calculation and the minus operator. The salary equation was also not correct for calculating the leftover salary after tax.
- balance variable was spelled differently in the declaration and the console.log.
- The final value should have only 2 decimal places so the toFixed function should not be 3.
- The final console.log should have the string "R" concatenated to the balance to show currency.

What changes did you need to make to achieve the intended behaviour?
- I gave the hourOfDay variable a comparison of !==null and then placed all the if conditions in one bracket.
- I used the parseInt() function to convert the tax variable to number in the taxAsDecimal variable and I removed the string quotes from the 100.
- I removed the string '1' from the startingAfterTax variable and changed it to salary - (salary * taxAsDecimal).
- I renamed the 'balace' variable to balance to match the console.log.
I changed the value in toFixed(3) to toFixed(2) and I added the string "R" and concatenated it to balance.toFixed(2).