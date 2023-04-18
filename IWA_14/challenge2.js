
const add = (a, b) => { 
    return a + b }

const multiply = (a, b) => {
    return a * b }


    /*Have to use the function keyword to be able to use this
    * keyword to refer to the object the function is in*/
const internal = function () {
    const added = add(this.internal.a, this.internal.b)
    const multiplied = multiply(added, this.internal.c)  
	 console.log(multiplied);
}


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()


