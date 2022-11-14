// Créez un programme qui affiche ses arguments reçus à l’envers

// $ node e3_envers.js Salut tout le monde !
// ! monde le tout Salut

let args = process.argv.slice(2);
let reverseArgs = args.reverse().join(" ");

console.log(reverseArgs);

// OU

// let args = process.argv.slice(2);

// let arr = [];
// for (let i = args.length - 1; i >= 0; i--) {
//   arr.push(args[i]);
// }
// console.log(arr.join(" "));
