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
    const w = readline().trim();
    let wordLen = w.length;
    let lowWord = w.toLowerCase();
    let counter = 0;
    for (let i = 0; i < wordLen; i++) {
      if (w[i] === lowWord[i]) counter++;
    }
    if (counter >= wordLen / 2) {
      print(w.toLowerCase()) ;
    } else {
      print(w.toUpperCase());
    }
}
