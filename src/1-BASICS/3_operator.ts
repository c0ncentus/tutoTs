// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators


// comparators
console.log(`(4 > 4) === false: ${(4 > 4) === false}`)
console.log(`(4 >= 4) === true: ${(4 >= 4) === true}`)
console.log(`(4 < 4) === false: ${(4 < 4) === false}`)
console.log(`(4 <= 4) === true: ${(4 <= 4) === true}`)

console.log(`(4 === 4) === true: ${(4 === 4) === true}`)
console.log(`(4 !== 4) === false: ${(4 !== 4) === false}`)

//   (false     ||     false)             === false) 
//   (       false                        === false)
//                          true

console.log(`(false || false) === false: ${(false || false) === false}`)
console.log(`(true || true) === true: ${(true || true) === true}`)
console.log(`(true || false) === true: ${(true || false) === true}`)
console.log(`(true && false) === false: ${(true && false) === false}`)
console.log(`(true && true) === true: ${(true && true) === true}`)
// function toto(x: string) { return x !== "" };

// nums operator
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



// === falsy value ===
// that's why is important to use "===" instead !
console.log(`[0, false, "", undefined, null, NaN].every(x => x == false): ${[0, false, "", undefined, null, NaN].every(x => x == false)}`)

// === nullish value ===
// that's why is important to use "===" instead !
console.log(`[null, undefined].every(x => x == null)}: ${[null, undefined].every(x => x == null)}`)
