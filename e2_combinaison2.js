// Créez un programme qui affiche toutes les différentes combinaisons de deux nombres entre 00 et 99 dans l’ordre croissant.

// Exemples d’utilisation :

// $ node e2_combinaison2.js
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99

let arrNb = [];
for (let i = 0; i <= 98; i++) {
  let nb0 = 2 - String(i).length;
  let nb1 = "0".repeat(nb0) + i;

  for (let j = 1; j <= 99; j++) {
    let nb0 = 2 - String(j).length;
    let nb2 = "0".repeat(nb0) + j;
    if (i < j) {
      arrNb.push(`${nb1} ${nb2}`);
    }
  }
}
console.log(arrNb.join(", "));
