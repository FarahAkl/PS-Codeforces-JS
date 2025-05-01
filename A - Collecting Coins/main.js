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
  let t = parseInt(readline());
  for (let i = 0; i < t; i++) {
    let [a, b, c, n] = readline().split(" ").map(Number);
    let max = Math.max(a, b, c);
    let total = max - a + (max - b) + (max - c);
    print(total>n?"NO":(n-total)%3!==0?"NO":"YES")
  }
}
