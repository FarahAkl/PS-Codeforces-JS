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
  let arrPairs = [];
  for (let i = 0; i < n; i++) {
    let pair = readline().trim().split(" ").map(Number);
    arrPairs.push(pair);
  }
  let q = [];
  for (let i = 0; i < n; i++) {
    if (arrPairs[i][0] === 1) {
      q.push(arrPairs[i][1]);
    } else if (arrPairs[i][0] === 2 && q.length === 0) {
      print("no");
    } else if (arrPairs[i][0] === 2 && q.length) {
      print(arrPairs[i][1] === q.shift() ? "yes" : "no");
    }
  }
}
