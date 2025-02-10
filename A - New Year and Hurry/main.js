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
  let [n, k] = readline().trim().split(" ").map(Number);
  let timeAvailable = 240 - k;
  let i = 1;
  let counter = 0;
  while (timeAvailable > 0) {
    timeAvailable -= i++ * 5;
    if (timeAvailable >= 0) counter++;
  }
  print(counter > n ? n : counter);
}
