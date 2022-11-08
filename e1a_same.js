function isSameNumber(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  if (x.split("").sort().join("") === y.split("").sort().join("")) {
    return true;
  }
  return false;
}

console.log(isSameNumber("213", "321"));

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
