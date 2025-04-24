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
    let arr = [];
    let n = parseInt(readline());
    for (let j = 0; j < n; j++) {
      let a = readline().split("");
      let x = a.indexOf("#") + 1;
      arr.push(x);
    }
    print(arr.reverse().join(" "));
  }
}
