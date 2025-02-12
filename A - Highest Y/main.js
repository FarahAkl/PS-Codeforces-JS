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
  let arrPair = [];
  for (let i = 0; i < n; i++) {
    let pair = readline().trim().split(" ").map(Number);
    arrPair.push(pair);
  }
  let k = 0;
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n - 1; i++) {
      if (arrPair[i][1] < arrPair[i + 1][1]) {
        k = arrPair[i];
        arrPair[i] = arrPair[i + 1];
        arrPair[i + 1] = k;
      }
    }
  }
  for (let i = 0; i < n; i++){
    arrPair[i] = arrPair[i].join(" ")
  }
  print(arrPair.join(`\n`))
}
