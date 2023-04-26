Nwabisa Mawu IWA_16: Using arrays

Technologies used: JavaScript HTML

Why did the original code not work?
- The parameter for the createHTML function is not used in the function
- The syntax used to create new HTML elements was incorrect.
- There is no code assigning new values to the text spaces of the new elements.
- There is no code to identify the date of the last race and the time of that race. 

What changes did you need to make to achieve the intended behaviour?
- I first used destructuring to fetch the athletes information, and saved these in two variables for each athlete.
- In the createHTML function, I created the h2, dl, dd and dt elements then I used the querySelector() method to fetch the section of the page to be fetched then appended the created elements as children of the section.
- I used the innerHTML property to add all the title headings of the information to the dt elements.
- To get the date of the last race, I created a getLastRace function that accepts an array as a parameter. Inside the function, I create a variable to store the first date to be compared in the loop and a variable maxIndex to store the index number of the last date, first intialized to 0. I added a for loop that iterates over the races array and compares the dates to the first date then replaces the value if the new date is later and changes the maxIndex value too. The function returns an object that contains the last date and the index of the object containing that date.
- To get the duration of the last race and put in the format hh:mm, I created a variable lastRaceTime where I applied the reduce function to the array[lastIndex] to add all the numbers inside the array.
- I converted the hours by dividing the lastRaceTime value by 60 then wrapped in the Math.floor method to round it down.
- I got the minutes by taking the remainder of lastRaceTime/60 then I created a variable where I used template literals and interpolation to convert the hours and minutes to strings then using the padStart() method on the hours to add 2 zeros if the value of hours is 0.
- I used the innerHTML property to add the lastRaceTimeString to the HTML page.