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

function spiral(matrix) {
    let arr = [],
        result = '';

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map(a => a.pop()),
            ...matrix.pop().reverse(),
            ...matrix.map(a => a.shift()).reverse()
        );
    }

    for (let row = 0; row < arr.length; row++) {
        result += arr[row] + ' ';
    }

    console.log(result);
}

spiral(matrix);