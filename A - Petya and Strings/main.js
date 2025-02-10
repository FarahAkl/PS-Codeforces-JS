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
    const n1 = readline().trim().toLowerCase();
    const n2 = readline().trim().toLowerCase();
    if (n1 === n2) {
        print("0")
    } else if (n1 < n2) {
        print("-1")
    } else {
        print("1")
    }
}
