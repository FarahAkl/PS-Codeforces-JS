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
  let arr = readline().trim().split("").map(Number);
    let s = []
    for (let i = 0; i < n; i++){
        if (s.length == 0 || s[ s.length - 1 ] === arr[ i ]) {
            s.push(arr[i])
        } else {
            s.pop()
        }
    }
  print(s.length);
}
