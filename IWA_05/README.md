Nwabisa Mawu IWA_05 Challenge solution

Technologies used: JavaScript HTML

Why did the original code not work?
- The shipping and currency were placed comparison variables but they were not declared and given a value.
- NAM and RSA were not strings, which is what the location variable has as the value.
- The if statement for the condition where the shipping is free was just the shipping word assigned to a null value.
- The NONE_SELECTED variable was used in string quotes.
- The if statements for the scenarios were not clear.

What changes did you need to make to achieve the intended behaviour?
- I declared shipping and currency as variables using the const keyword because they will not be changed for each country during the calculation of the total cost.
- I added string quotation marks to NAM and RSA for the location variable.
- I created a variable to calculate the total cost without shipping.
- I used the totalCost variable to creat ean if statement for when the totalCost is >= 1000 and currency is R or >= 60 and the currency is $ then shipping should equal 0.
-Removed the string quotes around the NONE_SELECTED variable for pens and shirts calculations.
- Created if statements for the different countries and their shipping prices, and one for the warning for North Korea

