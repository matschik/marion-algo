let args = process.argv.slice(2);
let inputArg = args[0];
let splitArg = inputArg.split(":");
let hour = splitArg[0];
let n = Number(hour);

function format(n) {
  if (n > 12) {
    return n - 12 + ":" + splitArg[1] + "PM";
  }
  if (n === 00) {
    return n + 12 + ":" + splitArg[1] + "AM";
  }
  if (n === 12) {
    return n + ":" + splitArg[1] + "PM";
  }
  if (n < 12 && n !== 00) {
    return n + ":" + splitArg[1] + "AM";
  }
}
console.log(format(n));
