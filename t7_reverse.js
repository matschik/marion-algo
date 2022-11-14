let args = process.argv.slice(2);
let inputArg = args[0];
let splitArg = inputArg.split("");
let reverseArg = splitArg.reverse();
let joinArg = reverseArg.join("");
console.log(joinArg);
