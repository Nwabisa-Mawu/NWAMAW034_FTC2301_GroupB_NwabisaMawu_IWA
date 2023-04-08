const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

/** constant amounts spent on food and transport **/
const expenses = {
    food: 51.7501,
    transport:  10.2,
}

/** Different tax rates stored by 3-digit code */
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

/** The rental amounts for different dwellings */
const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]) / 100;
const startingAfterTax = salary - (salary * taxAsDecimal);

/** The combining of lodging and size values into a string: 
 * @example
 * size = 'large'
 * lodging = 'apartment'
 * type = 'large-apartment'
 */
const type = `${size}-${lodging}`;

const balance = startingAfterTax - (expenses.transport) - (expenses.food) - rent[type];

console.log(balance.toFixed(2));