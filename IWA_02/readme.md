Nwabisa Mawu IWA_02:Commenting and logging challenges

Technologiue used: HTML JavaScript

<b>Challenge 1</b>

Why did the original code not work?
- The variable for the username was part of the comment explaining it instead of below.
- The variables in the console.log were separated by a semi-colon instead of a comma.

What changes did you need to make to achieve the intended behaviour?
- I moves the surname variable to the line below it.
- I removed the semi-colons and replaced them with a comma in between the variables.

<b>Challenge 2</b>
Why did the original code not work?
- The tooltip for the date variable was "(c) ACME Inc. 2010" because the correct tooltip definition was not commented correctly with two ** after the / not one then jump to the next line. 

What changes did you need to make to achieve the intended behaviour?
- I moved the "This is the date that a user created their account" comment to the same line as the /* preceding it and then the tooltip was changed.

<b>Challenge 3</b>
Why did the original code not work?
- Th // did not enclose the following statements in a comment.
- 'Security scan starting' should be a string inside the console.log function.
- The * is outside instead of inside the comment in the line preceding the console.info function.

What changes did you need to make to achieve the intended behaviour?
- I enclosed the comments in /**/, which the way to comment in JavaScript.
- I put string quotations around the words in the console.warn function.
- I moved the asterisk * to before the / so that the comment can be closed and the console.log function that follows can be run.