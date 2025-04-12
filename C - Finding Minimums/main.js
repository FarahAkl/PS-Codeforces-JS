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
  let [ n,k ] = readline().split(' ').map(Number)
  let arr = readline().split(" ").map(BigInt);
  let mins = []
  if (k === 1) {
    print(arr.join(' '))
    return;
  }
  for (let i = 0; i < n; i += k) {
    let group = arr.slice(i, i + k);
    let min = group.reduce((a, b) => (a < b ? a : b));
    mins.push(min);
  }
  print(mins.join(" "))
}
