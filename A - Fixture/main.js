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
  let n = parseInt(readline());
  let score = 0;
  let arr = readline().split(" ").map(Number);
  for (let i = 0; i < n; i++) {
    arr[i] == 1 ? score++ : score--;
  }
  for (let i = 0; i < n-2; i++) { 
    if(arr[i]&&arr[i+1]&&arr[i+2]) score++;
  }
  print(score);
}
