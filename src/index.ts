







// // console.log(response.split("\n").filter(toto)); === ligne 63
// console.log(response.split("\n").filter(x =>
//     x !== ""
//     || BLABLAS_BOT.every(y => new RegExp(y, "ig").test(y)) === false)
// );


// console.log([1000, "blue", "somtehing", 3].every(x=>x===3)) // => similaire à la condition &&
// console.log([1000, "blue", "somtehing", 3].some(x=>{return x===3})); // =>  similaire à la condition ||


// console.log([1000, "blue", "somtehing", 3].map(e=>{e===3}))// [ false, false, false, true ]
// console.log([1000, "blue", "somtehing", 3].map(e=>{e===3})) // [undefined, undefined,undefined ]
// [ false, false, false, true ]
// every => false && false && false && true => false
// some => false || false || false || true => true
