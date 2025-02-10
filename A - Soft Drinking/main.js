"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  const [n, k, l, c, d, p, nl, np] = readline().split(" ").map(Number);
  let totalDrink = k * l;
    let totalLime = c * d;
    print(Math.floor(Math.min((totalDrink/nl),totalLime,(p/np))/n))
}
