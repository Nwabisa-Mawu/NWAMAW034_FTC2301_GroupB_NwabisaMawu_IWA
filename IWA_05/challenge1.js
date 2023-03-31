const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0';

let shoes = 300* 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

const itemCost = (shoes + toys + shirts + batteries + pens);

const customers = 1;
const country = 'RSA'





if (country === 'RSA' && itemCost < 1000) {
 
    const shipping = 400
    const currency = 'R';

        // added the brackets because the string + maths operation 
        // caused the numbers to be converted to strings
    const totalCost = currency + (shipping + itemCost);
    
console.log('Price: ' + totalCost)
}  

else if (country === 'RSA' && itemCost >= 1000) {

    const shipping = 0;
    const currency = 'R';

    const totalCost = currency + (shipping + itemCost);
    
console.log('Price: ' + totalCost)
} 

else if (country === 'NAM' && itemCost < 60) {

    const shipping = 600
    const currency = '$';

    const totalCost = currency + (shipping + itemCost);
    
console.log('Price: ' + totalCost)

}
else if (country === 'NAM' && itemCost >= 60) {

    const shipping = 0;
    const currency = '$'

    const totalCost = currency + (shipping + itemCost);
    
console.log('Price: ' + totalCost)
} 

else if (country === 'NK') {

    console.log(BANNED_WARNING)
}

else {

    const shipping = 800
    const currency = '$';

    const totalCost = currency + (shipping + itemCost);
    
console.log('Price: ' + totalCost)
}



