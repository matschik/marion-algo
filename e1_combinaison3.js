function add0() {
  let arrNb = [];
  for (let i = 0; i <= 999; i++) {
    let nb0 = 3 - String(i).length;
    arrNb.push("0".repeat(nb0) + i);
  }
  return arrNb;
}

let allNb = add0();

let newArray = [];
for (let i = 0; i < allNb.length; i++) {
  let x = String(allNb[i]);
  let arraySplit = x.split("");
  for (let j = 1; j < arraySplit.length; j++) {
    if (
      arraySplit[j - 1] < arraySplit[j] &&
      arraySplit[j] < arraySplit[j + 1]
    ) {
      newArray.push(String(arraySplit.join("")));
    }
  }
}

console.log(newArray.join(", "));
