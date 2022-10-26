let args = process.argv.slice(2);
let inputNb = args[0];
let num = Number(inputNb);

if (!isNaN(num)) {
  let isEven = num % 2 === 0;
  if (isEven) {
    console.log("pair");
  } else {
    console.log("impair");
  }
} else {
  console.log("impossible");
}
