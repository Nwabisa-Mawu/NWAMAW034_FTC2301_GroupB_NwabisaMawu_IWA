Nwabisa Mawu IWA_08: Object literal syntax

Technologies used: JavaScript HTML

Why did the original code not work?
- The sarahBalance variable was declared twice using the const keyword.
- The assignment operator, =, was missing from both object declarations.
- The object keys were assigned values using the assignment operator for all their values for all the objects.
- There were no commas separating the key-value pairs inside the object curly brackets.
- "access id" key, its value, "address" key and "postal-code" key should be in string quotes because spaces/dashes are not allowed in key names, its not a JS practice.
- In the console.log brackets, the leo and sarah declarations used for the postal-code value had to be changed to the new string forms.

What changes did you need to make to achieve the intended behaviour?
- I declared a sarahBalance2 variable and assigned it with the value "-5".
- I replaced all the incorrect assignment operators with the correct :, colon used to assign key-value pairs in objects.
- Inserted assignment operators for the variables that are objects.
- I inserted a colon before the object value of the address key in both sarah and leo objects.
- I put "access id" key, its value, "address" key and "postal-code" key in string quotes then I changed their names in the console.log brackets.
- I put commas between the key-value pairs inside the objects.