let args = process.argv.slice(2);
let inputArg = args[0];
let valeur = Number(inputArg);

if (!isNaN(valeur) && valeur >= 0) {
  console.log(Math.sqrt(valeur));
} else {
  console.log("erreur");
}
