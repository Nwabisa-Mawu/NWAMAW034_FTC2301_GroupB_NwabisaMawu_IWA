// store three things in our js storage
// to select the three html elements we want to use and store

// use const because variable will always refer to element
  //Do not use css classes
//because if it is changed then the response will stop
//use element id's and (data-key)data attributes=allow you to add custom attributes
//to HTML
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

// add an event listener - tell it to listen for something and when
//the thing happens, it must do something
// after comma, say what must happen.

// we can also add event handlers
// to assign an action use ()=>

const subtractHandler = () => {
        console.log('subtract was clicked');
}

const addHandler = () => {
        console.log('add was clicked')
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler) //tells it to run addHandler
//instructions after add has been clicked
//NOTE-create event response before declaration otherwise console
//will not read if it is called before it is declared

