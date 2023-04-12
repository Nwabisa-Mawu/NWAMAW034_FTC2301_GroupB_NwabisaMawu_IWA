Nwabisa Mawu IWA_10: Built-in objects

Technologies used: JavaScript HTML

Why did the original code not work?

- The code used to check whether there is a key 9 in the holidays object was calling the value of the 9 key incorrectly by adding the .name as a possible value of a key within the key 9 inside holidays.
- The string was formatted incorrectly for template literals and interpolation.
- The copied variable that should contain the object that holds the temporary changes was declared using the const keyword so it cannot be reassigned and given the value of the holidays object, meaning any changes made to the copied would also happen in the holidays object, therefore there is no temporary hold object.
- The line after the copied variable declaration contains a reassignment to a constant value, and this is just a new key-value pair that will end being added to the holidays object without checking.
- The value of the christmas key date in the holidays object was called incorrectly for the assignment of the isEarlier variable and the variable is called before it is initialized.
- The if statement checking whether the new date is earlier or later than the one in the holidays object was formatted incorrectly and was missing the behaviour to be carried out after evaluation. 
- The strings used to call print the status of the changes were formatted incorrectly, the value would always be a boolean and not the value of the change if there is one added.
- The values of the numbers inside the Math.min/max methods were formatted incorrectly. The getTime() method is for the new Date() object not the dot notation used to call information from an object.
- The firstDay, firstMonth, lastDay, lastMonth variables had values that were using new Date() object methods.
- The randomHoliday variable used to generate a random key from the holidays object is formatted incorrectly. The value will always be a float between 1 and 0, none of the keys in the holidays object have that variable.

What changes did you need to make to achieve the intended behaviour?

- I removed the .name and fixed the string by replacing the string quotes with back ticks then adding the dollar $ symbol before the curly brackets containing the variable name.
-  I declared the copied variable using the let keyword because I am going to add new values as new information is added. I gave it the value of an empty object.
- I declared a new variable using the let keyword because the varibale may have its value changed, depending on the date that is being changed. I gave it the value of an object containing two key-value pairs that have the new christmas name and date.
- I declared the isEarlier variable using the const keyword because the boolean value it will be testing will not change, only the values of the variables used in the evaluation. I moved the console log calling the variable to the line below it.
- I added curly brackets to the if statement then reassigned the empty copied object the value of the object carrying the changes.
- I created short-hand if statements for each call where the response printed out is either false or the value of the change added.
- I wrapped the statements in the new Date() object then used dot notation to call the getTime method to get the lowest/highest value.
- I wrapped the firstDay, firstMonth, lastDay, lastMonth variables' values in new Date() objects then used its methods.
- I used bracket notation to call a key of the holidays object using a random value between 0 and 8, I used the the floor() method for the Math object to make the value and integer then multiplied the random() method by 9 so that 8  can be a value if a float between 8 and 9 is generated.
- I created a new variable called randomDate and gave it the value of a string using template literals and interpolation. For the calling of values from the holidays object, I replaced the key part with the variable randomHoliday.