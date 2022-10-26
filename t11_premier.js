let args = process.argv.slice(2);
let inputArg = args[0];
let n = Number(inputArg);

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i == 0) return false;
  return true;
}

if (!isNaN(n) && n >= 2 && Number.isInteger(n)) {
  if (isPrime(n)) {
    console.log("Oui,", n, "est un nombre premier.");
  } else {
    console.log("Non,", n, "n'est pas un nombre premier.");
  }
} else {
  console.log("erreur");
}
