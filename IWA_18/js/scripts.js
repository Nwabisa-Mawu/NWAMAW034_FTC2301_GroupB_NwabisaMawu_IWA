//Object with data to fetch the html elements to be used
import { html, updateDraggingHtml, createOrderHtml, moveToColumn } from './view.js';
//
import { updateDragging, createOrderData } from './data.js';




/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    
    /*to determine which column the order is being dragged over,
     the event path is checked*/
    const path = event.path || event.composedPath()
    /*created column variable and set it to null so that the value can equal the
    value of the data-area attribute of that column*/
    let column = null
 
    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })

    return column
}

/**
 * 
 * @param {*} event 
 */
const handleDragStart = (event) => {
    
    // //fetch the name of the coumn being dragged over
    // const columnName = document.querySelector('[data-area]').getAttribute('data-area')

    // if (columnName === 'preparing') {
    //     return
    //     updateDragging({ source: column })
    //     updateDraggingHtml({ source: column })
    // }

}


const handleDragEnd = (event) => {
   event.preventDefault();
    
 }

/**
 * This function will show an overlay with the instructions on how to use 
 * the app when the ? is clicked then will close when close is clicked.
 * @param {Event} event 
 */
const handleHelpToggle = (event) => {
    event.preventDefault();
    html.help.overlay.showModal();

    html.help.cancel.addEventListener("click", () => {
        html.help.overlay.close()
        /*will make the page focus on the add order button after the
        information overlay is closed*/
        html.other.add.focus()
    });
}


/**
 * A handler that makes the page focus on the add order button upon loading 
 * so it can be accessed using the spacebar/enter/click.
 * When clicked, the overlay page showing the menu to add items 
 * will pop up.
 * Also removes the add order page when cancel is clicked.
 * @param {Event} event 
 */
const handleAddToggle = (event) => {
    /* to bring the add items to menu overlay page */
    html.add.overlay.showModal();
    /* the cancel button will remove the overlay add to menu page */
    html.add.cancel.addEventListener("click", () => {
        event.preventDefault();
        html.add.overlay.close()
        /*will make the page focus on the add order button after the
        information overlay is closed*/
        html.other.add.focus()
    });
}


/**
 * When the "Add" button in the add Order overlay is clicked, then this 
 * will handle the addition of the new order to the "Ordered" column. 
 * @param {Event} event 
 */
const handleAddSubmit = (event) => {
    event.preventDefault();

    /* created the props object required for the createOrderData function */
    const props = {
        title: html.add.form.title.value,
        table: html.add.form.table.value,
        column: html.edit.column.value
    };

    const orderData = createOrderData(props);
    //create a new object 
    const order = orderData;
    const orderHtml = createOrderHtml(order);
    //to move the order to the "ordered" column
    const orderedColumn = html.columns.ordered;
    orderedColumn.appendChild(orderHtml);
    //makes the form empty after submission
    html.add.form.reset();

    // will close the overlay before adding the orders to html
    html.add.overlay.close();
    html.other.add.focus();

}

/* to only open the edit order overlay when you click on an order in the 
ordered column - cannot edit when preparing and served */
const orderedGroup = html.other.grid.querySelector('[data-column = "ordered"]')
/* create a global variable to store the id selected for editing */
let orderId = 0;

/**
 * This handler will make the edit overlay appear when an order is clicked
 * on in its respective column.
 * It will also delete the entry when delete link is clicked and
 * allow for changing of the order details.
 * @param {Event} event 
 */
const handleEditToggle = (event) => {
    event.preventDefault();

    const orderInfo = event.target.closest('[data-id]');
    //if the div is not found, return empty
    if (!orderInfo) return;
    /* fetch the order id so it can be used to replace the table
       and title inputs */
    orderId = orderInfo.getAttribute('data-id');

    const orderEdit = orderedGroup.querySelector(`[data-id="${orderId}"]`);
    if (!orderEdit) return;
    /* to show the edit order page overlay when you click on a specific order*/
    orderEdit.addEventListener("click", () => {
        html.edit.overlay.showModal();
    });

    /* to remove the overlay when cancel is clicked without
        changing the contents of the order */
    html.edit.cancel.addEventListener("click", () => {
        html.edit.overlay.close();
        html.other.add.focus();
    });

    /* to delete the entry if the delete link is clicked*/
    html.edit.delete.addEventListener("click", () => {
        html.columns.ordered.removeChild(orderInfo);
        html.edit.overlay.close();
        html.other.add.focus();
    });

}



const handleEditSubmit = (event) => {
    event.preventDefault();

    // fetch the order that was clicked
    const orderInfo = orderedGroup.querySelectorAll('[data-id]');
    /* fetch the order id so it can be used to replace the table
    and title inputs */
    for (let i = 0; i < orderInfo.length; i++) {
        const currentId = orderInfo[i].getAttribute('data-id');

        /*compare the ids of the orders with the clicked id to change the
        correct order*/
        if (currentId === orderId) {
            //create a new object to store the changed information 
            const props = {
                title: html.edit.form.title.value,
                table: html.edit.form.table.value,
                column: html.edit.form.column.value
            };

            //create new order data with the edited information
            const orderData = createOrderData(props);

            //fetch the order whose info is to be repelaced using the id
            const editedOrder = document.querySelector(`[data-id = "${currentId}"]`);

            //replace the order information manually as it is added
            editedOrder.querySelector('[data-order-title]').textContent = orderData.title;
            editedOrder.querySelector('[data-order-table]').textContent = orderData.table;
            //will sort out with drag functions
            // editedOrder.querySelector('[data-order-column]').textContent = orderData.column;

            //reset the form before closing
            html.edit.form.reset();
            //close the overlay and refocus on the add order button
            html.edit.overlay.close();
            html.other.add.focus();
        }
    }
}


const handleDelete = (event) => { } // put it in the edit handler
//To focus the add order button when the page loads
const addOrderBtn = html.other.add
window.addEventListener("load", () => {
    addOrderBtn.focus()
});


html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

orderedGroup.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

/*This loop iterates over an array of the three columns in the html page*/
for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

/* This loop iterates over the same columns but with their name in the 
data-area attribute name to identify its heading. */
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}