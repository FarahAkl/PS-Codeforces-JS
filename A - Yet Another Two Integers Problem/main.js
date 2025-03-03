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
        let [ a, b ] = readline().split(" ").map(Number);
        print(Math.ceil(Math.abs(a - b) / 10));
    }
}
