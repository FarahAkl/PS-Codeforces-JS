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
  const t = parseInt(readline());

  for (let i = 0; i < t; i++) {
    const n = parseInt(readline());
    let resultX = 2;
    let maxResult = 0;
    for (let x = 2; x <= n; x++) {
      let i = 1;
      let result = 0;
      while (i * x <= n) {
        result += i * x;
        i++;
      }
      if (result > maxResult) {
        maxResult = result;
        resultX = x;
      }
    }
    print(resultX);
  }
}
