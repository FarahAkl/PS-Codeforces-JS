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
    for (let i = 0; i < t; i++){
        let [ a, b ] = readline().split(" ").map(Number);
        let arr = [];
        arr.push(a + b, a - b, a * b, a / b, b - a, b / a);
        let s = new Set(arr);
        print(s.size);
    }
}
