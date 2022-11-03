let args = process.argv.slice(2);

function isSorted(arrNb) {
  for (let i = 1; i < arrNb.length; i++) {
    let nb1 = Number(arrNb[i - 1]);
    let nb2 = Number(arrNb[i]);

    if (nb1 > nb2) {
      return "Pas trié";
    }
  }

  return "Trié";
}
console.log(isSorted(args));
