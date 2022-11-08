function isDuplicated(x) {
  let xSorted = x.split("").sort();
  for (i = 1; i < xSorted.length; i++) {
    if (xSorted[i - 1] === xSorted[i]) {
      return "Oui";
    }
  }
  return "Non";
}
console.log(isDuplicated("hey"));
