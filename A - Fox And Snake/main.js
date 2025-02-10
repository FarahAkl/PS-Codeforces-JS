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
    let [ row, col ] = readline().trim().split(' ').map(Number)
    for (let i = 1; i <= row; i++){
        if (i % 2 === 1) {
          print("#".repeat(col));
        } else if (i % 4 === 0) {
          print(`#${".".repeat(col - 1)}`);
        } else if (i % 2 === 0) {
          print(`${".".repeat(col - 1)}#`);
        }
    }
}
