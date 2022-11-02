function allnumbers() {
  for (let i = 0; i <= 999; i++) {
    if (String(i).length === 1) {
      console.log("00" + i);
    }
    if (String(i).length === 2) {
      console.log("0" + i);
    }
    if (String(i).length === 3) {
      console.log(String(i));
    }
  }
}
console.log(allnumbers());
