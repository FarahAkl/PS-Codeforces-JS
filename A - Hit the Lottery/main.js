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
  let n = parseInt(readline().trim());
  let dol = [100, 20, 10, 5, 1];
  let counter = 0;

  for (let i = 0; i < dol.length; i++) {
    while (n >= dol[i]) {
      n -= dol[i];
      counter++;
    }
  }
  print(counter);
}
