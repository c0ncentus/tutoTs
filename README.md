https://developer.mozilla.org/en-US/


# Play with code

- 1 go to https://vscode.dev/
- 2 click "Ouvrir un référentiel distant"
- 3 copy past "https://github.com/c0ncentus/tutoTs"


# Memo

## Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

x > y

x >= y

x < y 

x <= y

4 === 4 // strict equality

4 !== 4 // strict inequality

<img src="./Assets/boolean_table%20verite.jpg">

// nums operator

x + y

x * y

x ** y // exemple x=3, y=2 => 3²

x / y // error when y=0

x - y

x + y

!x => !falsy=true, !truefy=false 

console.log(`null ??"is nullish": ${null ?? "is nullish"}`)

console.log(`undefined ??"is nullish": ${undefined ?? "is nullish"}`)

console.log(`0 ??"is not nullish": ${0 ?? "is not nullish"}`)




// === falsy value ===
- 0, 
- false, 
- ""
- undefined
- null
- NaN

// === truefy value ===
- 1, etc ... 
- true 
- "something", etc ...
- \[\], \["something"\], etc ...
- {}, {key_:"value"}, etc ...
- function func(){}
- class Class_{}
- and more ...

// === nullish value ===
- null
- undefined