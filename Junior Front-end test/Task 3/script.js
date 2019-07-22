/*
    Task 3:
        Create a function that has two parameters: a and b. It must return an object modeling a
        rectangle that has the following properties:
            • length : This value is equal to a.
            • width: This value is equal to b.
            • perimeter: This value is equal to 2 x (a + b)
            • area: This value is equal to a x b

        Constraints
            • 1 ≤ a, b ≤ 100
*/

function createRectangleObject(a, b) {
    
    if( (a >= 1 && a <= 100) && ( b >= 1 && b <= 100) ) {
        return {
            length: a,
            width: b,
            perimeter: 2*(a + b),
            area: a * b
        }
    } else {
        return 'Passed values must be between 1 and 100!'
    }
}

console.log(createRectangleObject(5, 100))