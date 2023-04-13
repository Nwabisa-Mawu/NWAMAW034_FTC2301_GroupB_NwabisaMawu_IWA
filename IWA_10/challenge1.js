const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


// check whether the holiday object has a key 9
console.log(holidays[futureId] || `ID ${futureId} not created yet`);


//declaring the temporary object
let copied = new Object();
//used let because the properties of the object may be changed
/** Xmas is an object that contains updated Xmas information */
let xMas = { name: 'X-mas Day',
            date: new Date(`25 December ${currentYear}`) };

// Checking whether the new date is earlier than the current date
const isEarlier = xMas.date < holidays[6].date
console.log('New date is earlier?', isEarlier)

/*if the new date is earlier then move it from change to copied object
which is temporary holder*/
if (isEarlier) {
    copied = xMas;   
}

/* if the date is earlier it should tell you what changes were made
 before replacing them to the holidays object*/
console.log('ID change:', copied.id === undefined ?  false : copied.id);
console.log('Name change:', copied.name === undefined ? false : copied.name);
console.log('Date change:', copied.date === undefined ? false : `${(copied.date.getDate()).toString().padStart(2,0)}/${(copied.date.getMonth() + 1).toString().padStart(2,0)}/${currentYear}`)


const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
    )

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)



const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;


console.log(`${firstDay.toString().padStart(2,0)}/${firstMonth.toString().padStart(2,0)}/${currentYear}`);
console.log(`${lastDay.toString().padStart(2,0)}/${lastMonth.toString().padStart(2,0)}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random()*9)];
const randomDate = `${(new Date(randomHoliday.date).getDate()).toString().padStart(2,0)}/${(new Date(randomHoliday.date).getMonth()+1).toString().padStart(2,0)}/${currentYear}`
console.log(randomDate);