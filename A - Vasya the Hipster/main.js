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
    let [ a, b ] = readline().trim().split(" ").map(Number)
    let dif = Math.min(a, b)
    let same = Math.floor((Math.max(a, b) - dif) / 2)
    print(`${dif} ${same}`)
}
