
const orders = {
    'order 1': {
        'biscuits': document.querySelector('[data-biscuits = "10"]').getAttribute('data-biscuits'),
        'donuts': document.querySelector('[data-donuts = "13"]').getAttribute('data-donuts'),
        'pancakes': document.querySelector('[data-pancakes = "0"]').getAttribute('data-pancakes'),
        'status': document.querySelector('[data-delivered = "false"]').getAttribute('data-delivered')
    },
    'order 2': {
        'biscuits': document.querySelector('[data-biscuits = "5"]').getAttribute('data-biscuits'),
        'donuts': document.querySelector('[data-donuts = "0"]').getAttribute('data-donuts'),
        'pancakes': document.querySelector('[data-pancakes = "2"]').getAttribute('data-pancakes'),
        'status': document.querySelector('[data-delivered = "false"]').getAttribute('data-delivered')
    },
    'order 3': {
        'biscuits': document.querySelector('[data-biscuits = "12"]').getAttribute('data-biscuits'),
        'donuts': document.querySelector('[data-donuts = "11"]').getAttribute('data-donuts'),
        'pancakes': document.querySelector('[data-pancakes = "15"]').getAttribute('data-pancakes'), 
        'status': document.querySelector('[data-delivered = "true"]').getAttribute('data-delivered')
    }
}

// get the element to be replaced
const updateOrder = document.getElementsByClassName('count');
//get the element to be replaced
const orderStatus = document.getElementsByTagName('dd');

//order 1 amounts
updateOrder[0].innerHTML = orders['order 1']['biscuits'];
updateOrder[1].innerHTML = orders['order 1']['donuts'];
updateOrder[2].innerHTML = orders['order 1']['pancakes']; 
//order 1 status
orderStatus[3].innerHTML = orders['order 1']['status'];

//order 2 amounts
updateOrder[3].innerHTML = orders['order 2']['biscuits'];
updateOrder[4].innerHTML = orders['order 2']['donuts'];
updateOrder[5].innerHTML = orders['order 2']['pancakes'];
//order 2 status
orderStatus[7].innerHTML = orders['order 2']['status'];

//order 3 amounts
updateOrder[6].innerHTML = orders['order 3']['biscuits'];
updateOrder[7].innerHTML = orders['order 3']['donuts'];
updateOrder[8].innerHTML = orders['order 3']['pancakes'];
//order 3 status
orderStatus[11].innerHTML = orders['order 3']['status'];


