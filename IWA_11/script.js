
const root1 = document.querySelector('[data-key = "order1"]');
const biscuits1 = document.querySelector('[data-biscuits = "10"]');
const donuts1 =  document.querySelector('[data-donuts = "13"]');
const pancakes1 = document.querySelector('[data-pancakes = "0"]');
const status1 = document.querySelector('[data-delivered = "false"]');


const root2 = document.querySelector('[data-key = "order2"]');
const biscuits2 = document.querySelector('[data-biscuits = "5"]');
const donuts2 = document.querySelector('[data-donuts = "0"]');
const pancakes2 = document.querySelector('[data-pancakes = "2"]');
const status2 = document.querySelector('[data-delivered = "false"]');


const root3 = document.querySelector('[data-key = "order3"]');
const biscuits3 = document.querySelector('[data-biscuits = "12"]');
const donuts3 = document.querySelector('[data-donuts = "11"]');
const pancakes3 = document.querySelector('[data-pancakes = "15"]');
const status3 = document.querySelector('[data-delivered = "true"]');
// get the element to be replaced
const updateOrder = document.getElementsByClassName('count');
//get the element to be replaced
const orderStatus = document.getElementsByTagName('dd');

//order 1 amounts
updateOrder[0].innerHTML = biscuits1.getAttribute('data-biscuits');
updateOrder[1].innerHTML = donuts1.getAttribute('data-donuts');
updateOrder[2].innerHTML = pancakes1.getAttribute('data-pancakes'); 
//order 1 status
orderStatus[3].innerHTML = status1.getAttribute('data-delivered');

//order 2 amounts
updateOrder[3].innerHTML = biscuits2.getAttribute('data-biscuits');
updateOrder[4].innerHTML = donuts2.getAttribute('data-donuts');
updateOrder[5].innerHTML = pancakes2.getAttribute('data-pancakes');
//order 2 status
orderStatus[7].innerHTML = status2.getAttribute('data-delivered');

//order 3 amounts
updateOrder[6].innerHTML = biscuits3.getAttribute('data-biscuits');
updateOrder[7].innerHTML = donuts3.getAttribute('data-donuts');
updateOrder[8].innerHTML = pancakes3.getAttribute('data-pancakes');
//order 3 status
orderStatus[11].innerHTML = status3.getAttribute('data-delivered');


