function allNumbers() {
  let arrNb = [];
  for (let i = 0; i <= 999; i++) {
    if (String(i).length === 1) {
      arrNb.push("00" + i);
    }
    if (String(i).length === 2) {
      arrNb.push("0" + i);
    }
    if (String(i).length === 3) {
      arrNb.push(String(i));
    }
  }
  return arrNb;
}
let allNb = allNumbers();

function isDuplicated(x) {
  let xSorted = x.split("").sort();
  for (i = 1; i < xSorted.length; i++) {
    if (xSorted[i - 1] === xSorted[i]) {
      return "Oui";
    }
  }
  return "Non";
}

function sortedNumbers(allNb) {
  for (i = 1; i < allNb.length; i++) {
    if (allNb[i - 1] === allNb[i]) {
      return;
    }
  }
}
