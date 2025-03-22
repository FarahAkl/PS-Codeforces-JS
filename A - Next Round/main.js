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
  let [n, k] = readline().split(" ").map(Number);
  let a = readline().split(" ").map(Number);
  let num = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] >= a[k - 1] && a[i] > 0) {
      num++;
    } else {
      break;
    }
  }
  print(num);
}
