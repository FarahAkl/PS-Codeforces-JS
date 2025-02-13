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
    let n = parseInt(readline())
    let q = readline()
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let waiting = 0
    let dis =0

    for (let j = 0; j < n; j++){
        if (waiting<= q[ j ]) {
            dis++
            waiting+=q[j]
        }
    }
    print(dis)
}
