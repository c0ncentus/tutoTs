// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
import {} from "../2-PRACTICE/exercice/algo/youcom"

// BOOLEAN
console.log(`(4 > 4) === false: ${(4 > 4) === false}`)
console.log(`(4 >= 4) === true: ${(4 >= 4) === true}`)
console.log(`(4 < 4) === false: ${(4 < 4) === false}`)
console.log(`(4 <= 4) === true: ${(4 <= 4) === true}`)

console.log(`(4 === 4) === true: ${(4 === 4) === true}`)
console.log(`(4 !== 4) === false: ${(4 !== 4) === false}`)

//   (false     ||     false)             === false) 
//   (       false                        === false)
//                          true

console.log(`(false || false) === false: ${(false || false)=== false}`)
console.log(`(true || true) === true: ${(true || true) === true}`)
console.log(`(true || false) === true: ${(true || false) === true}`)
console.log(`(true && false) === false: ${(true && false)=== false}`)
console.log(`(true && true) === true: ${(true && true) === true}`)


// NUMBER
console.log(`3 + 2: ${3 + 2}`)
console.log(`3 * 2: ${3 * 2}`)
console.log(`3 ** 2: ${3 ** 2}`)
console.log(`3 / 2: ${3 / 2}`)
console.log(`3 < 2: ${3 < 2}`)
console.log(`3 > 2: ${3 > 2}`)
console.log(`3 <= 2: ${3 <= 2}`)
console.log(`3 >= 2: ${3 >= 2}`)
console.log(`3 - 2: ${3 - 2}`)
console.log(`3 + 2: ${3 + 2}`)
console.log(`!false: ${!false}`)
console.log(`!true: ${!true}`)
console.log(`null ??"is nullish": ${null ?? "is nullish"}`)
console.log(`undefined ??"is nullish": ${undefined ?? "is nullish"}`)
console.log(`0 ??"is not nullish": ${0 ?? "is not nullish"}`)



// STRING
console.log(`"3"+"0": ${"3" + "0"}`)//"3"+"0":30
console.log(`${reverseStringY("Bonjour, comment ça va ?")}`)



console.log("Fr100".length)//
console.log("Fr100".repeat(2))
console.log("Fr100".replace("0", "_"))
console.log("Fr100".search("F"))
console.log("Fr100".split(""))
console.log("Fr100".split("1"))
console.log("Fr100".substring(0, 3))
console.log("Fr100".toUpperCase())
console.log("Fr100".toLowerCase())
console.log("  Fr100  ".trim())
console.log(`${4>5}`)


// === falsy value ===
// that's why is important to use "===" instead !
console.log(`[0, false, "", undefined, null, NaN].every(x => x == false): ${[0, false, "", undefined, null, NaN].every(x => x == false)}`)

// === nullish value ===
// that's why is important to use "===" instead !
console.log(`[null, undefined].every(x => x == null)}: ${[null, undefined].every(x => x == null)}`)