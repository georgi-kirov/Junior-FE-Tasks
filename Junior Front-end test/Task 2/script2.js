/*
    Task 2:
        Write a function which accepts a square matrix as an input and prints its elements, while
        going through the elements spirally.
*/

const matrix = [
    [1,  2,   3,  4],
    [5,  6,   7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
];

function getMatrixSpiral(input, result) {

    if (input.length == 0) {
        return result;
    }

    // add the first row to result
    result = result.concat(input.shift());
    
    // add the last element of each remaining row
    input.forEach(rightEnd => result.push(rightEnd.pop()));

    // add the last row in reverse order
    result = result.concat(input.pop().reverse());

    // add the first element in each remaining row (going upwards)
    let tmp = [];
    input.forEach(leftEnd => tmp.push(leftEnd.shift()));

    result = result.concat(tmp.reverse());

    return getMatrixSpiral(input, result);
}

let result = getMatrixSpiral(matrix, []);


let tmpResult = '';

for (let row = 0; row < result.length; row++) {
    tmpResult += result[row] + ' ';
}

console.log(tmpResult);