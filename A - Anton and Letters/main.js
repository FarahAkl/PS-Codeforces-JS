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
    let characters = readline()
      .trim()
      .slice(1, -1)
      .split(", ")
      .filter((c) => c !== "");
    let s = new Set(characters)
    print(characters== [""]?"0":s.size)
}
