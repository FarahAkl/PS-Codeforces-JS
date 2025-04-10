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
  let arr = [];
  let c = 1;
  for (let i = 0; i < t; i++) {
    arr.push(readline().trim());
  }
  for (let i = 1; i < t; i++) {
    if (arr[i] !== arr[i - 1]) {
      c++;
    } 
  }
  print(c)
}
