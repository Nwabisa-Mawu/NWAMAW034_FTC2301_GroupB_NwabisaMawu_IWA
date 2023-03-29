Nwabisa Mawu IWA_03: Script element and modules

Technologies used: HTML JavaScript

Why did the code not work?
 - HTML file:
   - The script tags in the head element had no closing tags.
   - The source path for the scripts was not declared correctly, it was module="script name", without the src attribute.
- nwabisa.js, johannes.js,  alex.js:
   - The variables were not declared using const/var/let, they just had the word "private".
   - All the variables in each JS file used the same names for role, firstname and surname.
   - There were brackets and string quotations around the 'role' variable

What changes were made to get achieve the intended behavior?
 - I added closing tags to the script elements and the defer attribute.
 - I changed the module="script name" to the correct source attribute using their source paths.
 - I removed the string quotations around the "role" variable in the display variable
 - I renamed the variables for firstname, surname, role, and display for johannes.js and alex.js by adding _1 and _2 to their names.