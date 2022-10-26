let args = process.argv.slice(2);
let inputNb1 = args[0];
let inputNb2 = args[1];
let base = Number(inputNb1);
let expos = Number(inputNb2);

if (!isNaN(base) && !isNaN(expos) && expos >= 0) {
  console.log(Math.pow(base, expos));
} else {
  console.log("erreur");
}
