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

//MAKE books GRAYSCALE/BLACK - NO COLOR

/* get the button elements to be changed*/
const allButtons = document.getElementsByTagName("button");
/* use the style object to change text-color for the three incorrect books*/
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].style.color = ""
}


//CHANGE STATUS TEXT TO CORRESPOND TO OBJECT.

/* fetch the element to be chnaged*/
const fetchStatus = document.getElementsByClassName("status");

const books = document.getElementsByTagName("div");

/* use indexes to change the text colors using the style object 
I used the set.attribute method instead of style object property 
because I want to replace the style, and not just change it

I used a for loop that will iterate over all the book divs in the page
and then check the status of the span element then adjust the buttons
inside that book div accordingly */


for (let i = 0; i < books.length; i++) {
    const reserveBtn = books[i].getElementsByClassName("reserve")[0]
    const checkoutBtn = books[i].getElementsByClassName("checkout")[0]
    const checkinBtn = books[i].getElementsByClassName("checkin")[0]

    if (fetchStatus[i].innerHTML === 'shelf') {
        fetchStatus[i].setAttribute("style", "color: green");
        checkinBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === 'reserved') {
        fetchStatus[i].setAttribute("style", "color: blue");
        reserveBtn.disabled = true;
        checkinBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === 'overdue') {
        fetchStatus[i].setAttribute("style", "color: red");
        reserveBtn.disabled = true;
        checkoutBtn.disabled = true;
    }
    if (fetchStatus[i].innerHTML === 'checkedOut') {
        fetchStatus[i].setAttribute("style", "color: orange");
        reserveBtn.disabled = true;
        checkoutBtn.disabled = true;
    }

};







