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
  let arr = readline()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let arr2 = [];
  let val=null;
  for (let i = 0; i < t; i++) {
    if (arr2.length > 0 && arr2[arr2.length - 1] === arr[i]) {
      val =arr2.pop();
    } else if(arr[i] !== val) {
      arr2.push(arr[i]);
    }
  }
  print(arr2.length);
}
