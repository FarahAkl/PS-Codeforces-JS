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
    let w = readline().trim().split("");
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (j === n - 1 || w[j ] != w[j+ 1] ) {
        arr.push(w[j]);
      }
    }
      let s = new Set(arr);
      print(s.size===arr.length?"Yes":"No");
  }
}
