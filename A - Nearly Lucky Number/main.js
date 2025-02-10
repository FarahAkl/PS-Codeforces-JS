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
    const n = readline().trim().split("");
    let countOfLuck = 0
    for (let i = 0; i < n.length; i++){
        if(n[i]==="4" || n[i]==="7")countOfLuck++;
    }
    print(countOfLuck === 7 || countOfLuck === 4 ? "YES" : "NO");
}
