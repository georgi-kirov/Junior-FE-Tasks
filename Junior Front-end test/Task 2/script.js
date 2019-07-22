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
    
    while(matrix.length) {
        // print first row

        if(matrix.length ) {
            for (let row= 0; row < 1; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    console.log(matrix[row][col]);
                }
                matrix.shift();
            }
        } else {
            break;
        }
        

        // print last index of each row
        if ( matrix.length ) {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < 1; col++) {
                    console.log(matrix[row][matrix[row].length - 1])
                }
                matrix[row].pop();
            }
        } else {
            break;
        }
        

        // print last row
        if ( matrix.length ) {
            for (let row = matrix.length - 1; row < matrix.length; row++) {
                for (let col = matrix[row].length -1; col >= 0; col--) {
                
                    console.log(matrix[row][col])
                }
                matrix.pop();
            }
        } else {
            break;
        }
        

        // print first index of each row
        if ( matrix.length ) {
            for (let row = matrix.length - 1; row >= 0; row--) {
                for (let col = 0; col < 1; col++) {
                    console.log(matrix[row][0]);
                }
                matrix[row].shift();
            }
        } else {
            break;
        }
        
        spiral(matrix)
    }
    
}

spiral(matrix)