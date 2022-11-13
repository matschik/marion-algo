//exercice
let arr = [];
let args = process.argv.slice(2);
let inputChar = args[0];
let inputCharCode = inputChar.charCodeAt(0);
let nbLoop = "z".charCodeAt(0) - inputCharCode;
for (let i = 0; i <= nbLoop; i++) {
  arr.push(String.fromCharCode(inputCharCode + i));
}

console.log(arr.join(""));
//console.log(
//String.fromCharCode(inputCharCode + 1),
//String.fromCharCode(inputCharCode + 2),
//String.fromCharCode(inputCharCode + 3),
//String.fromCharCode(inputCharCode + 4)
//)
