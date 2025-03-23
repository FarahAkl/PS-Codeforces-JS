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
  let a = readline().split("");
  let s = [];
  for (let i = 0; i < n; i++) {
    if (a[i] != s[s.length - 1]) {
      s.push(a[i]);
    }
  }
  print(n - s.length);
}
