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
    let o = readline().trim().split(" ")
    let hardConunt = 0;
    for (let i = 0; i < n; i++){
        if (o[ i ] == 1) hardConunt++
    }
    print(hardConunt >= 1?"HARD":"EASY")
}
