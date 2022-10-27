let args = process.argv.slice(2);
let inputNb1 = Number(args[0]);
let inputNb2 = Number(args[1]);
let inputNb3 = Number(args[2]);

if (
  Number.isInteger(inputNb1) &&
  Number.isInteger(inputNb2) &&
  Number.isInteger(inputNb3) &&
  inputNb1 !== inputNb2 &&
  inputNb1 !== inputNb3 &&
  inputNb2 !== inputNb3
) {
  if (
    (inputNb1 < inputNb2 && inputNb1 > inputNb3) ||
    (inputNb1 < inputNb3 && inputNb1 > inputNb2)
  ) {
    console.log(inputNb1);
  }
  if (
    (inputNb2 < inputNb1 && inputNb2 > inputNb3) ||
    (inputNb2 < inputNb3 && inputNb2 > inputNb1)
  ) {
    console.log(inputNb2);
  }
  if (
    (inputNb3 < inputNb1 && inputNb3 > inputNb2) ||
    (inputNb3 < inputNb2 && inputNb3 > inputNb1)
  ) {
    console.log(inputNb3);
  }
} else {
  console.log("erreur");
}
