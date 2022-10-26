let args = process.argv.slice(2);
let inputArg = args[0];
let splitArg = inputArg.split(":");
let hour = splitArg[0];
let n = Number(hour);
let splitArg2 = inputArg.split("");

function format(n) {
  if (n < 12 && splitArg2[5] === "P") {
    return n + 12 + "h" + splitArg2[3] + splitArg2[4];
  }

  if (n < 12 && splitArg2[5] === "A") {
    return n + "h" + splitArg2[3] + splitArg2[4];
  }

  if (n === 12 && splitArg2[5] === "P") {
    return n + "h" + splitArg2[3] + splitArg2[4];
  }
  if (n === 12 && splitArg2[5] === "A") {
    return n - 12 + "h" + splitArg2[3] + splitArg2[4];
  }
}
console.log(format(n));
