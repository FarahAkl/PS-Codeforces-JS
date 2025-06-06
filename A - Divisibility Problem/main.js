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
  const n = parseInt(readline());
  for (let i = 0; i < n; i++) {
    let [num1, num2] = readline().trim().split(" ").map(Number);
    print((num2 - (num1 % num2)) % num2);
  }
}
