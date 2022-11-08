let args = process.argv.slice(2);

function isSameNumber(x, y) {
  if (x.length !== y.length) {
    return "Non";
  }
  if (x.split("").sort().join("") === y.split("").sort().join("")) {
    return "Oui";
  }
  return "Non";
}

console.log(isSameNumber(args[0], args[1]));

// function isSameNumber(x, y) {
//   if (x.length !== y.length) {
//     return false;
//   }
//   if (
//     x.charCodeAt(0) + x.charCodeAt(1) + x.charCodeAt(2) ===
//     y.charCodeAt(0) + y.charCodeAt(1) + y.charCodeAt(2)
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log(isSameNumber("124", "451"));
