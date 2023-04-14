const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//MAKE BUTTONS GRAYSCALE/BLACK - NO COLOR

/* get the button elements to be changed*/
const allButtons = document.getElementsByTagName('button');
/* use the style object to change text-color for the three incorrect buttons*/
allButtons[2].style.color = "";
allButtons[5].style.color = "";
allButtons[8].style.color = "";

//CHANGE STATUS TEXT TO CORRESPOND TO OBJECT.

/* fetch the element to be chnaged*/
const fetchStatus = document.getElementsByTagName("span");

/* use indexes to change the text colors using the style object 
I used the set.attribute method instead of style object property 
because I want to replace the style, and not just change it*/
fetchStatus[0].setAttribute("style", "color: red");
fetchStatus[1].setAttribute("style", "color: blue");
fetchStatus[2].setAttribute("style", "color: green");

//CHANGE BUTTONS ENABLE/DISABLE TO MATCH OBJECT

//A good book//
//buttons for book 1//
allButtons[0].disabled = true;
allButtons[1].disabled = true;
allButtons[2].disabled = false;

//buttons for book 2//
allButtons[3].disabled = true;
allButtons[4].disabled = false;
allButtons[5].disabled = true;

//buttons for book 3//
allButtons[6].disabled = false;
allButtons[7].disabled = false;
allButtons[8].disabled = true;


// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'