//exercice
// for(let i = 2; i < process.argv.length; i++) {
//    console.log(process.argv[i]);
// }

//correction
let args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}
