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
    let one = 0;
    let two = 0;
    let n = parseInt(readline());
    let arr = readline().split(" ").map(Number);
    for (let j = 0; j < n; j++) {
      if (arr[j] == 1) one++;
      else two++;
    }
    print((one + 2 * two) % 2 == 0 && (one > 0 || two % 2 == 0) ? "YES" : "NO");
  }
}
