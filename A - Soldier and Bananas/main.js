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
    const [ k, n, w ] = readline().split(" ").map(Number);
    let tResult = 0
    for (let i = 1; i <= w; i++){
        tResult += (i*k)
    }
    tResult -=n
    print(tResult<0?"0":tResult)
}
