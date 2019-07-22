/*
    Task 7 
        Instead of paying attention to Infromatics class, Milena is writing to her friends on facebook.
        Her teacher noticed that each message Milena has written is with Latin letters and with no
        intervals between the words. As a result Milena had to write an additional program for
        homework, which prints the letters used in the messages, that are used more than once in an
        alphabetical order. The program should also print how many times each letter is used.
        You can help Milena by writing a program which solves the given task.

    Constraints
        • 1 ≤ number of characters in string s ≤ 100
*/

function findCommonCharacters(string) {
    let result = {};
    // // if string must be only with lower case
    // let tmpArr = string.toLowerCase().split('').sort();

    // if string have and Upper case characters and lower
    let charArray = string.split('').sort();

    charArray.forEach(char => {

        if (result[char]) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
        
    });

    console.log(result)
}


findCommonCharacters('HelloThisissomethingthatiwanttotest')