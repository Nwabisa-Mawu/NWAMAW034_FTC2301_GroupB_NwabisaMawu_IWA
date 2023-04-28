
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

/**
 * Function that creates an empty array of the given length parameter
 * to be filled later.
 * @param number length 
 * @returns Array named result
 */
const createArray = (length) => {
    const newArray = []

    for (let i = 0; i < length; i++) {
        newArray[i] = null
    }
    return newArray
}

const createData = () => {

    let weeks = createArray(5)

    /* for loop to create the text inside the week column cells
    and add them to the weeks array and the number of rows for
    the weeks column */
    for (const [index, singleWeek] of weeks.entries()) {
        weeks[index] = `Week ${index + 1}`
    };

    return weeks;
};


const addCell = () => {
    // created a single row with 8 columns
    const newRow = document.createElement('tr');

    /* for loop to repeat the addition of a new cell to the row */
    for (let i = 0; i < 8; i++) {
        const newCell = document.createElement('td');
        // added attribute to cells
        newCell.setAttribute("class", "table__cell");
        newRow.appendChild(newCell);
    }
    return newRow
};


const createHtml = (data) => {

/* create for loop to use the addCell function 5 times
to make 5 rows - started index from one for readability*/
for (let i = 1; i < 6; i++) {
    document.body.appendChild(addCell())
}

//for loop to add the week text to the first cell of each row
const rows = document.body.querySelectorAll('tr');
const currentDay = new Date()
const daysInMonth = getDaysInMonth(currentDay)

for (let i = 1; i < 6; i++) {
//fetch all the first cells of each row

  const weekCells = rows[i].querySelectorAll('td')
   weekCells[0].classList.add('table__cell_sidebar')
   weekCells[0].innerHTML = data[i - 1];

   for (let x = 1; x < 8; x++) {
    let day = x+1
    weekCells[x].innerHTML = day

    //used to add the light color to the weekends
    if ((x === 1 || x === 7) ) {
        weekCells[x].classList.add('table__cell_weekend')
    }
    
    /* to populate the day cells with the month days */
    if(i === 2 && day < daysInMonth) {
        day +=7
        weekCells[x].innerHTML = day
        weekCells[x].classList.add('table__cell_alternate')
    } else if (i === 3 && day < daysInMonth) {
        day +=14
        weekCells[x].innerHTML = day
    } else if (i === 4 && day < daysInMonth) {
        day +=21
        weekCells[x].innerHTML = day
        weekCells[x].classList.add('table__cell_alternate')
    } else if (i === 5 && day < daysInMonth) {
        day +=28
        weekCells[x].innerHTML = day
        if (day === daysInMonth) break;
    }
   //used to mark the current day
   if (day === currentDay.getDate()) {
    weekCells[x].classList.add('table__cell_today')
}
   }
}
};


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data);