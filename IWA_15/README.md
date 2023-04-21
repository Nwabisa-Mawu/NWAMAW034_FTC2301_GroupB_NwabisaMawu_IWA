Nwabisa Mawu IWA_15: Arrays and destructuring

Technologies used: JavaScript HTML

Why did the original code not work?
- The variables that contain the code to fetch the array lists from the data object were incorrect.
- In the extractBiggest function, the conditions used in the if statements do not use the correct syntax to call the variables and they are being compared to each other instead of one variable that can be used to place the biggest number.
- The extractBiggest function does not have a statement that removes the biggest number from its array in the object.

What changes did you need to make to achieve the intended behaviour?
- I declared the first, second and third variables and gave them the values of the lists according to the data object using dot notation and array indexing.
- In the extractBiggest function, I declared a mutable variable, biggest and initialized it to 0, this will be used to hold the biggest number in the evaluations. I also declared a mutable listNumber variable that will be used to hold the index number of the list in the ojbject that must be removed.
- I edited the if statement conditions to check whether the length of the array was > 0, meaning it was not empty, and whether the value of the last item was > than the biggest variable. If so, the biggest variable will be changed to the array number and the listNumber will be changed to the index number of the list in the array.
- I created a fourth if statement with the condition that checks that the listNumber is not equal to -1, its initial value then the function will remove the biggest number from the list that was selected.