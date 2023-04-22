const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1]; 
const third = data.lists[2][1];

const result = [];

const extractBiggest = () => { 
    /*the placeholder variable
    for the biggest number in the evaluations */
    let biggest = 0; 

    /*setting the index number
    so that it can specify which data.lists array to
    pop a value from */
    let listsNumber = -1; 

	if (first.length > 0 && first[first.length-1] > biggest) {
		biggest = first[first.length -1];
        listsNumber = 0;
	} 
    if (second.length > 0 && second[second.length-1] > biggest) {
        biggest = second[second.length-1];
        listsNumber = 1;
    }
    if (third.length > 0 && third[third.length-1] > biggest) {
        biggest = third[third.length-1];
        listsNumber = 2;
    } 
    
    //remove the biggest number from its list 
    if (listsNumber !== -1) {
        data.lists[listsNumber][1].pop()
    }

    return biggest
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)