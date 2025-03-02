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
  let [r, c] = readline().trim().split(" ").map(Number);
  let colored = false;
  for (let i = 0; i < r; i++) {
    let row = readline().trim().split(" ");
    for (let j = 0; j < c; j++) {
      if (row[j] === "C" || row[j] === "M" || row[j] === "Y") {
        colored = true;
      }
    }
  }
  print(colored ? "#Color" : "#Black&White");
}
