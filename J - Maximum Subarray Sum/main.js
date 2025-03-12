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
  let n = parseInt(readline());
  let arr = readline().split(" ").map(Number);
  let maxV = -Infinity;
  let minPrefix = 0;
  for (let i = 1; i < n; i++) {
    arr[i] += arr[i - 1];
  }
  for (let i = 0; i < n; i++) {
    maxV = Math.max(maxV, arr[i] - minPrefix);
    minPrefix = Math.min(minPrefix, arr[i]);
  }
  print(maxV);
}
