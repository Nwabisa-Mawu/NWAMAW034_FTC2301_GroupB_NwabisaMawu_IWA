Nwabisa Mawu IWA_11: Document Object Model

Technologies used: JavaScript HTML

Why did the original code not work?
- The variables that contain the data attributes values were not declared correctly using the const or let keyword.
- The querySelector method for the document object was not called correctly by placing the data attributes values in parenthesis.
- The variable declarations were ended with commas instead of semi-colons.
- There is no variable that can be used to get the element whose text must be replaced for the food items and the status of delivery.
- There are not statements that show what should be replaced with what information.

What changes did you need to make to achieve the intended behaviour?
- I added the const keyword to all the variables used to collect the data attribute information.
- I used the querySelector method of the document object and inserted the data attribute values from the orders in the brackets to get their values.
- I replaced the commas at the end of declarations with semi-colons.
- I declared two variables, updateOrder and orderStatus, they will let the JS script select the elements that I want to change, by index.
- I used the innerHTML property on the updateOrder and orderStatus variables, with different indexes according to my target element,  to replace their current values to the values of the data attributes.
- I put all the order information inside an object named 'orders', which is made up of 3 objects, each named after the order number and inside the object is the querySelector method used ot fetch the data key values then the get.Attribute method is attached to replace the values in the HTML page with the data key values.