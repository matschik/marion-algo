let args = process.argv.slice(2);
let inputArg = args[0];
let splitArg = inputArg.split("");
let reverseArg = splitArg.reverse();
let joinArg = reverseArg.join("");
console.log(joinArg);

// function reverse(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }

// let reverseStringIs = reverse(inputArg);
// console.log(reverseStringIs);
