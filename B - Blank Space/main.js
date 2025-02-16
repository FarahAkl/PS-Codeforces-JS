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
    let n = parseInt(readline());
    let arr = readline().trim().split(" ").map(Number);
    let counter = 0;
    let arrCount = [0];
    for (let j = 0; j < n; j++) {
      if (counter && arr[j] === 1) {
        arrCount.push(counter);
        counter = 0;
      } else if (arr[j] === 0) {
        counter++;
      }
      if (j === n - 1) {
        arrCount.push(counter);
      }
    }
    print(Math.max(...arrCount));
  }
}
