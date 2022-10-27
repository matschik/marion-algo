let args = process.argv.slice(2);
let inputNb1 = Number(args[0]);
let inputNb2 = Number(args[1]);
let inputNb3 = Number(args[2]);

function isMiddle(inputNb1, inputNb2, inputNb3) {
  if (
    (inputNb1 < inputNb2 && inputNb1 > inputNb3) ||
    (inputNb1 < inputNb3 && inputNb1 > inputNb2)
  ) {
    return inputNb1;
  }
  if (
    (inputNb2 < inputNb1 && inputNb2 > inputNb3) ||
    (inputNb2 < inputNb3 && inputNb2 > inputNb1)
  ) {
    return inputNb2;
  }
  if (
    (inputNb3 < inputNb1 && inputNb3 > inputNb2) ||
    (inputNb3 < inputNb2 && inputNb3 > inputNb1)
  ) {
    return inputNb3;
  }
}
console.log(isMiddle(inputNb1, inputNb2, inputNb3));
