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
    let t = parseInt(readline())
    for (let i = 0; i < t; i++){
        let n = readline().trim()
        let res1 = Number(n[0]) + Number(n[1]) + Number(n[2]);
        let res2 = Number(n[3]) + Number(n[4]) + Number(n[5]);
        print(res1 === res2?"YES":"NO")
    }
}
