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
    let [a, b] = readline().trim().split(" ").map(Number);
    let minV = b;
    let sum;
    for (let j = a; j <= b; j++) {
      sum = j - a + (j - b);
      if (sum < minV) {
        minV = sum;
      }
    }
    print(sum);
  }
}
