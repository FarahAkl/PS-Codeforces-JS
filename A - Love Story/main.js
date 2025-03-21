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
  let c = "codeforces";
  let n = c.length;
  for (let i = 0; i < t; i++) {
    let w = readline().trim();
    let counter = 0;
    for (let j = 0; j < n; j++) {
      if (c[j] !== w[j]) {
        counter++;
      }
    }
    print(counter);
  }
}
