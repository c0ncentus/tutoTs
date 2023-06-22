function reverseStringY(str: string): string {
  let wordsArray = str.split(" ");
  let reverseArray = wordsArray.reverse();
  let reversedString = reverseArray.join(" ");
  return reversedString;
}

let myString = "Bonjour, comment ça va ?";
let reversed = reverseStringY(myString);
console.log(reversed);
