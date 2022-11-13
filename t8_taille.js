let args = process.argv.slice(2);
let inputArg = args[0];

if (isNaN(inputArg)) {
  console.log(inputArg.length);
} else {
  console.log("erreur");
}
