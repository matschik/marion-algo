//exercice
//let char = String.fromCharCode(97);
//let string = 'a'
//console.log(string.charCodeAt(0))

// for(let index=97;index<123;index++){
//     console.log(String.fromCharCode(index))
// }

// //corection
// //let char = 97
// for (let i = 0; i < 26; i++) {
//     console.log(String.fromCharCode(char + i ));
// }

let string = "a";
let char = string.charCodeAt(0);
for (let i = 0; i < 26; i++) {
  console.log(String.fromCharCode(char + i));
}
