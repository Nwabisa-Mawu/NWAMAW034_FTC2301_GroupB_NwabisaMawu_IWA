Nwabisa Mawu IWA_03: Script element and modules

Technologies used: HTML JavaScript

Why did the code not work?
- The code did not work because the file path to configuration.js was not declared oroperly, it was missing .js and 
the document.querySelector('footer') function was concatenated to the replacement message.
- The script element in the HTML file was missing the type="module" and "defer" attriibutes.

What changes were made to get achieve the intended behavior?
-I put the import of year and company, from configuration, in the same line.
- I removed the document.querySelector function from the message variable and declared it below, because it called the variable so it cannot be in the same variableit calls.
- I added the type= "module" and "defer" attrributes to the script element on the HTML file
- I changed the incorrect "/configuration" file path to the correct format "./configuration.js"

