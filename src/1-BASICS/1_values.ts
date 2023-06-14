class ExempleClass {
    paramater1 = ""
    constructor(parameter: string) { this.paramater1 = parameter }
}



const ALL_VALUE = [
    ["", "something",
`It's been a complex string,
from into abyss.

... and it's over.
`],
    [undefined],
    [null, {}, { something: 3 }],
    [new Date(0), new ExempleClass("")],

    [false, true],
    [1, 4.50, -10, 0],
    [[]],
];

ALL_VALUE.forEach((arr,i)=>{
    console.log(`<=== Begin ${i+1} ===>`)
    arr.forEach((e)=>{console.log(`
    type:${typeof e} 
    value:${e===""?'\"\"':e}
    `)})
    console.log(`<=== end ${i+1} ===>`)
    console.log()
})