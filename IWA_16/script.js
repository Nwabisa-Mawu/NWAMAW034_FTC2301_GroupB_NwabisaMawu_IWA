
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

//used destructuring to fetch the athlete's data//
const { firstName: athlete1Name,
  surname: athlete1Surname,
  id: athleteId,
races: races1} = data.response.data.NM372

const {firstName: athlete2Name,
  surname: athlete2Surname,
  id: athlete2Id,
races: races2} = data.response.data.SV782


/**This is a function to add the <h2> and <dl> elements and fill
 * them with the athlete's information.
 * @param sectionKey {*String} - The data-athlete key found in the section element
 * @example '[data-athlete = "NM387"]'
 * @param athleteId {*String} - special athlete id number
 * @param name {*String} - first name of athlete
 * @param surname {*String} - last name of athlete
 * @param racesArray {*Array} - array containing objects with race
 * dates and times in nested arrays.
 */
const createHtml = (sectionKey, athleteId, name, surname, racesArray) => {
  const newH2 = document.createElement("h2")
  const newDl = document.createElement("dl")
  const newDt = document.createElement("dt")
  const newDd = document.createElement("dd")
  const newDt1 = document.createElement("dt")
  const newDd1 = document.createElement("dd")
  const newDt2 = document.createElement("dt")
  const newDd2 = document.createElement("dd")
  const newDt3 = document.createElement("dt")
  const newDd3 = document.createElement("dd")

  /* Insert the text for the h2 heading */
  const sectionInfo = document.querySelector(sectionKey)

  sectionInfo.appendChild(newH2)
  newH2.innerHTML = athleteId;
  sectionInfo.appendChild(newDl)

  //Athlete name and surname 
  newDl.appendChild(newDt)
  newDt.innerHTML = "Athlete:"
  newDl.appendChild(newDd)
  newDd.innerHTML = `${name} ${surname}`

  //Athlete number of races
  newDl.appendChild(newDt1)
  newDt1.innerHTML = "Total number of races:"
  newDl.appendChild(newDd1)
  newDd1.innerHTML = racesArray.length

  // date of last race
  newDl.appendChild(newDt2)
  newDt2.innerHTML = "Last event date:"
  newDl.appendChild(newDd2)

  /**function that takes the dates from the races array and returns the
   * most recent date and the index of number of the object with that date.
   * @param {*Array} racesArray from the createHTML parameters
   */
  const getLastRace = (racesArray) => {

    // create a variable to store the first date to be compared in the loop
    let maxDate = new Date(racesArray[0].date);
    //initial index will equal to the first object in the array
    let maxIndex = 0;

    /* created a for loop that iterates over each object in the array
    and checks whether it earlier than the first date, if so the 
    new date replaces the value of current date */
    for (let i = 1; i < racesArray.length; i++) {
      const currentDate = new Date(racesArray[i].date);
      if (currentDate > maxDate) {
        maxDate = currentDate;
        maxIndex = i;
      }
    }
    /* return an object containing the last date and the index of the
    object in the array */
    return { lastDate: maxDate.getTime(), lastIndex: maxIndex };
  };
   
  /* used destructuring to fetch the lastDate and the index of tha date */
  const {lastDate, lastIndex} = getLastRace(racesArray)
  
  newDd2.innerHTML = `${new Date(lastDate).getDate()} ${new Date(lastDate).toLocaleString('en-US', { month: 'short' })} ${new Date(lastDate).getFullYear()}`

  //Total time to complete the last race
  newDl.appendChild(newDt3)
  newDt3.innerHTML = "Last race duration:"
  newDl.appendChild(newDd3)

    const lastRaceTime = racesArray[lastIndex].time.reduce((total, minutes) => total + minutes, 0) 
    //divide by 60 to get the time in hours
    const hours = Math.floor(lastRaceTime/60);
   //modulus 60 to get the time left after whole hours are counted
    const minutes = lastRaceTime % 60;
    const lastRaceString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
   
  
  newDd3.innerHTML = lastRaceString;

}

createHtml('[data-athlete="NM372"]', athleteId, athlete1Name, athlete1Surname, races1)
createHtml('[data-athlete="SV782"]', athlete2Id, athlete2Name, athlete2Surname, races2)


