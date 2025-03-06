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
  let arr = readline().split(" ").slice(1).map(Number);
  let arr2 = readline().split(" ").slice(1).map(Number);
  let s = new Set([...arr, ...arr2]);
  print(s.size == n ? "I become the guy." : "Oh, my keyboard!");
}
