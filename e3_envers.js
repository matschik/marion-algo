// Créez un programme qui affiche ses arguments reçus à l’envers

// $ node e3_envers.js Salut tout le monde !
// ! monde le tout Salut

let args = process.argv.slice(2);
let reverseArgs = args.reverse().join(" ");

console.log(reverseArgs);
