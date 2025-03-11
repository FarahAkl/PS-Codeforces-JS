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
  let arr = Array(100001).fill(0);
  let maxV = 0;
  for (let i = 0; i < n;i++) {
    let [a, b] = readline().split(" ").map(Number);
    arr[ a - 1 ]++
    arr[ b ]--
    maxV = Math.max(maxV, b)
  }
  for (let i = 1; i <= maxV; i++) {
    arr[i] += arr[i-1];
  }
  print(Math.max(...arr));
}
