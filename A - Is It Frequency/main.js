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
    let [n, m] = readline().split(" ").map(Number);
    let arr = readline().split(" ").map(Number);
    let freq = new Array(m).fill(0);
    for (let i = 0; i < n; i++) {
        freq[arr[i]-1]++;
    }
    for (let i = 0; i < m;i++) {
        print(freq[i]);
    }
}
