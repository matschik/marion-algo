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
console.log(allNumbers());
