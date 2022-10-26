let args = process.argv.slice(2);
let inputArg = args[0];

if (isNaN(inputArg) && args.length === 1) {
  console.log(inputArg.length);
} else {
  console.log("erreur");
}
