#Nwabisa Mawu IWA_09: Using objects

##Technologies used: 
-JavaScript 
-HTML

##Why did the original code not work?
- The value of the tax percentage was accessed from the object using dot notation.
- The tax string value was not converted to a number(float) before dividing by 100.
- The equation for calculating the leftover salary after tax deductions was incorrect.
- The type variable concatenated the lodging and size variables without a hyphen between the words.
- In the final balance variable calculation, the amounts spent on food and transport were not called correctly using dot or bracket notation.
- The right value from the rent object was not accessed correctly because the type variable is concatenated to make the wrong string and bracket notation has to be used to access the key-value pair. 

##What changes did you need to make to achieve the intended behaviour?
- I accessed the value from the tax object using bracket notation that I enclosed in a parseFloat function to get a decimal.
- I changed the equation for startingAfterTax variable to the salary minus the value of the salary * the tax value.
- I used template literals and concatenation to combine the values of lodging and size with a hyphen between them so that it matches on of the keys found in the rent object.
- I used dot notation to access the food and transport key values from the expenses object then I used bracket notation to access the 'large-apartment' value in the rent object. The dot notation did not work? Why? 

**Note**: I did add some JSDoc comments, I'm just trying to train myself into the habit and learn when and how to use them.