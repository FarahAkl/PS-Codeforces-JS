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
  for (let a = 0; a < t; a++) {
    let [n, m] = readline().split(" ").map(Number);
    let arr = [];
    let hash = [];
    for (let i = 0; i < n; i++) {
      arr.push(readline().split(""));
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === "#") {
          hash.push([i + 1, j + 1]);
        }
      }
    }
    if (hash.length === 1) {
      print(hash[0].join(" "));
    } else {
      let x = hash[0][0];
      let y = hash[0][1];
      let a = hash[hash.length - 1][0];
      let b = hash[hash.length - 1][1];
      print((x + a) / 2 + " " + (y + b) / 2);
    }
  }
}
