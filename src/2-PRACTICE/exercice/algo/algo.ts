// Sure, here's an example TypeScript exam question:

// Write a TypeScript function that takes in a string as an argument and returns a new string in reverse order. 
// The function should be named reverseString and should include appropriate type annotations and error handling. 
// If an empty string is passed into the function, it should return an empty string.

// For example, if the input string is "hello", the function should return "olleh".

// Additionally, write a minimum of two tests for this function using a testing framework of your choice.
//  The tests should cover at least two different input scenarios.

// Good luck!
function reverseString(phrase: string): string {
    return phrase.split("").reverse().join("")
}
function reverseString2(phrase: string): string {
    const LENGTH = phrase.length
    let result=""
    for (let index = 0; index < LENGTH; index++) {
       result=result+phrase[LENGTH-1-index] ;
        
    }
    return result 
}
