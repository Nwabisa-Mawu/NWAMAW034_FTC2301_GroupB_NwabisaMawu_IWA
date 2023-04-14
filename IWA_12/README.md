Nwabisa Mawu IWA_12: Style object

Technologies used: JavaScript HTML

Why did the original code not work?
- There were no selector methods used to call the buttons or the status text from the html document page.
- There was no setAttribute method or style object appended to the selector using dot notation to change the colour property of the button text.
- The disabled property of the document object was not used to disable and enable buttons according to the object.

What changes did you need to make to achieve the intended behaviour?
- I fetched the html buttons by creating a variable allButtons that I gave the value of the getElementByTagName method of the document object.
- I used the style object's colour property to change the colour of the buttons to black by giving a value of a blank string.
- To set the status colours, I fetched the text inside the span element using the document object's getElementByTagName method, then I used the setAttribute method on the variable to replace the purple colour with the correct colours.
- To enable/disable the buttons, I appended the disable property to the allbuttons variable then used the indexes to choose buttons and gave the disabled property a value according to whether it should be enabled or disabled for the status of the book.