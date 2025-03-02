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
  let cubes = parseInt(readline());
  let count = 0;
  let i = 1;
  let j = 1;
  while (cubes > 0) {
    j = (i * (i + 1)) / 2;
    cubes -= j;
    i++;
    if (cubes >= 0) {
      count++;
    }
  }
  print(count);
}
