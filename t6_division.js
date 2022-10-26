let args = process.argv.slice(2);
let inputNb1 = args[0];
let inputNb2 = args[1];

let quo = Math.floor(inputNb1 / inputNb2);
let rem = inputNb1 % inputNb2;

if (!isNaN(quo) && quo !== 0 && !isNaN(rem) && rem !== 0) {
  console.log("resultat = ", quo, "reste =", rem);
} else {
  console.log("impossible");
}
