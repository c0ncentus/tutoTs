
// Step 1: Define Your Array Type You can define an array type in TypeScript 

import { flatten, sortBy, uniq } from "lodash";

// by using square brackets []. For example, if you want to define an array of strings, you would write:
let myArray: string[];

// This creates a myArray variable that is of type string[].


// Step 2: Create Your Array Once you've defined your array, you'll need to create it. 
// In TypeScript, you can create an array by using an array literal, which is simply a comma-separated list of values enclosed in square brackets. 
// For example, to create an array of strings, you might write:

let myArray1: string[] = ["apple", "banana", "orange"];

// This creates a myArray variable that contains the values "apple", "banana", and "orange".


// Step 3: Accessing Array Elements Once you've created your array, 
// you can start manipulating its elements. To access an element of an array, you'll typically use square bracket notation. 
// For example, to get the first element of the myArray variable we created above, we'd use:

// let firstElementError = myArray[0];
let firstElement = myArray1[0];

// dont use -x as array[x] because index of array are positive including 0 as the 1st index.


const ARRAY = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, "something"];


// you will use this at 90% of the time when do some operation on arrays
console.log(`ARRAY: ${ARRAY}`)
console.log(`ARRAY.length: ${ARRAY.length}`);
console.log(`ARRAY.every(x => x === 3): ${ARRAY.every(x => x === 3)}`);
console.log(`ARRAY.some(x => x === "something"): ${ARRAY.some(x => x === "something")}`);
console.log(`ARRAY.filter(x => x === 3): ${ARRAY.filter(x => x === 3)}`);
console.log(`ARRAY.map(x => { return typeof x === "string" ? x + "3" : x + 3 }): ${ARRAY.map(x => { return typeof x === "string" ? x + "3" : x + 3 })}`);
console.log(`ARRAY.find(x =>x==="something"): ${ARRAY.find(x => x === "something")}`);
console.log(`ARRAY.findIndex(x =>x==="something"): ${ARRAY.findIndex(x => x === "something")}`);
console.log(`ARRAY.join("; "): ${ARRAY.join("; ")}`);
console.log(`ARRAY.includes("some"): ${ARRAY.includes("some")}`);
console.log(`ARRAY.includes("something"): ${ARRAY.includes("something")}`);
console.log(`ARRAY.indexOf("something"): ${ARRAY.indexOf("something")}`);

let for_each_var = 0
ARRAY.forEach((x, index) => for_each_var = for_each_var + index);
console.log(`for_each_var: ${for_each_var}`)


let PUSH_ARRAY = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, "something"];
PUSH_ARRAY.push("Locked");
PUSH_ARRAY.push("Unlocked");
console.log(`PUSH_ARRAY: ${PUSH_ARRAY}`)

// [3, 3, 3, undefined , 3, "something"]; is the same things as below  => [3, 3, 3, , 3, "something"]
let SPLICE_ARRAY = [3, 3, 3, , 3, "something"];
SPLICE_ARRAY.splice(0, 1)
SPLICE_ARRAY.splice(0, 1)
SPLICE_ARRAY.splice(0, 1)
SPLICE_ARRAY.splice(0, 1)
SPLICE_ARRAY.splice(0, 1)
SPLICE_ARRAY.splice(0, 1)
console.log(`SPLICE_ARRAY: ${SPLICE_ARRAY}`)
// SPLICE_ARRAY.splice(0,1) // when execute thing, throws error because the array is empty = U_ARRAY.length = 0





//=========================================================
// ===================      LODASH      =================== 
//=========================================================

console.log( `uniq(ARRAY):${uniq(ARRAY)}`) 
console.log( `flatten([[[[[4]], 5]], 9] as any): ${flatten([[[[[4]], 5]], 9] as any)}`)
console.log(`sortBy([3,4,2,6,0],(x=>x)): ${sortBy([3,4,2,6,0],(x=>x))}`)
