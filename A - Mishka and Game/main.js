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
  let m = 0;
  let c = 0;
  for (let i = 0; i < t; i++) {
    let [num1, num2] = readline().trim().split(" ").map(Number);
    if (num1 > num2) {
      m += 1;
    } else if (num2 > num1) {
      c += 1;
    }
  }
  print(m === c ? "Friendship is magic!^^" : m > c ? "Mishka" : "Chris");
}
