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
  let timur = "Timur".split("");
  let t = parseInt(readline());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readline());
    let w = readline().trim().split("");
    if (n !== timur.length) {
      print("NO");
    } else {
      let s = new Set(w);
      if (s.size != n) {
        print("NO");
      } else {
        print(timur.sort().join("") === w.sort().join("") ? "YES" : "NO");
      }
    }
  }
}
