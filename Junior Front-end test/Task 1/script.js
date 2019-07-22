/*
    Task 1:
        Implement a function named factorial that has one parameter: an integer, n. It must return
        the value of n! (i.e., n factorial).
        
    Constraints
        • 1 ≤ n ≤ 10
*/

// ---------- Iterative way -------------

// function factorial(n) {
//     let result = 1;

//     if ( n >= 1 && n <= 10 ) {
//         for (let num = 2; num <= n; num++) {
//             result *= num;
//         }
//     } else {
//         result = 'Number must be between 1 and 10!';
//     }
    

//     return result;
// }

// // ----------- Recursive way -------------

// function factorial(n) {

//     if ( n >= 1 && n <= 10) {

//         if (n === 0 || n === 1) return 1;

//         return n * factorial(n - 1);
//     } else {
//         return 'Number must be between 1 and 10';
//     }
// }


function factorial(n) {

    return (n >= 1 && n <= 10 ? ((n === 0 || n === 1) ? 1 : factorial(n - 1) * n) : 'Number must be between 1 and 10') ;  
}

console.log(factorial(5));