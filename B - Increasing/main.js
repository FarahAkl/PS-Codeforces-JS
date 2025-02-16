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
    let arr = readline().trim().split(" ").map(Number).sort((a,b)=>a-b);
      let check = true;
      for (let j = 0; j < n - 1; j++){
          if (arr[ j ] >= arr[ j + 1 ]) {
              check = false
          }
      }
      print(check||n===1?"YES":"NO")
  }
}
