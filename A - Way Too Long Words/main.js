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
  const t = parseInt(readline());

  for (let i = 0; i < t; i++) {
    const n = readline().trim();
    if (n.length >10) {
      print(`${n[0]}${n.length - 2}${n[n.length - 1]}`);
    } else {
      print(n);
    }
  }
}
