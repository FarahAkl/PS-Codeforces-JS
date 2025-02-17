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
  let w = readline().trim().split("");
  let s = [];
  let counter = 0;
  for (let i = 0; i < w.length; i++) {
    if (s.length === 0 || w[i] !== s[s.length-1]) {
      s.push(w[i]);
    } else {
      s.pop();
      counter++;
    }
  }
  print(counter % 2 === 0 ? "NO" : "YES");
}
