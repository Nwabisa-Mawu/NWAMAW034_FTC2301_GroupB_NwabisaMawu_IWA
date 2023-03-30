const date = 2050;
const _status = 'parent';
const count = 0;

const publicHol = ['January: New Year’s Day', 'March: Human Rights Day', 'April: Family Day',
    'April: Freedom Day', 'August: Women’s Day', 'September: Heritage Day', 'December: Day of Goodwill',
    'December: Day of Reconciliation', 'December: Christmas Day']

if (date == 2050 && _status == 'parent') {

    // this gives the length of the array
    const count = publicHol.length;

    console.log('Your status is:', _status)
    console.log('The year is:', date)
    console.log('The total holidays is:', count);

}
else if (date == 2050 && _status == 'student') {

    // removes the christmas day element in the array
    publicHol.pop()
    // adds the youth element to the array
    publicHol.push('June: Youth Day')

    const count = publicHol.length;

    console.log('Your status is:', _status)
    console.log('The year is:', date)
    console.log('The total holidays is:', count);

}





