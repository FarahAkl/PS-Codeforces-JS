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
  let resultx = 0;
  let resulty = 0;
  let resultz = 0;
  for (let i = 0; i < n; i++) {
    let [num1, num2, num3] = readline().split(" ").map(Number);
    resultx += num1;
    resulty += num2;
    resultz += num3;
  }
  print(resultx === 0 && resulty === 0 && resultz === 0 ? "YES" : "NO");
}
