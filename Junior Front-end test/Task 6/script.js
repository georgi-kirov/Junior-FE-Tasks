/*
    Task 6:
        Write a program that finds the amount of numbers from a closed interval, which do not
        have two equal digits and lists them.
        
        Constraints
            • 1 < a < b < 1000
*/

function findNumbers(start, end) {

    if ( start > 1 && start < end && end < 1000) {
        let count = 0,
            numbers = '';

        for (let i = start; i <= end; i++) {
            
            if (checkDigits(i)) {
                count++;
                numbers += i + ',';
            }
        }

        console.log(count);
        console.log(numbers.slice(0, -1))
    } else {
        console.log('One of the values you enter is out of range')
    }
}

function checkDigits(num) {
    let arr = num.toString().split('');
    let isGood = true;

    for (let index = 0; index < arr.length - 1; index++) {
        let innerIndex = index + 1;

        for (let index1 = innerIndex; index1 < arr.length; index1++) {
            
            if (arr[index] === arr[index1]) {
                isGood = false;
            }
        }
    }

    return isGood;
}

findNumbers(90, 122)