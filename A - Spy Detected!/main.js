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
  for (let i = 0; i < n; i++) {
    let len = parseInt(readline());
    let arr = readline().trim().split(" ").map(Number);
    let sortArr = [...arr].sort((a, b) => a - b);
    let dif = sortArr[0] === sortArr[len - 2] ? sortArr[len - 1] : sortArr[0];
    print(arr.indexOf(dif) + 1);
  }
}
