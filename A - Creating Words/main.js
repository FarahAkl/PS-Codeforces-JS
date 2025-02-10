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
    for (let i = 0; i < n; i++){
        let [ word1, word2 ] = readline().trim().split(" ")
        print(`${word2[0]}${word1.slice(1)} ${word1[0]}${word2.slice(1)}`);
    }
}
