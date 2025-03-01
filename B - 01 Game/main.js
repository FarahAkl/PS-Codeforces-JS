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
      let arr = readline().trim().split("").map(Number);
      let s = []
      let c = 0
      for (let j = 0; j < arr.length; j++) {
          if (s.length===0||arr[j] ===s[s.length-1]) {
              s.push(arr[j])
          } else {
              if (s.length > 0) {
                  c++
                  s.pop()
              }
          }
      }
      print(c%2===0?"NET":"DA")
  }
}
