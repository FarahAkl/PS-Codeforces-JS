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
    let t = readline().trim();
    let check =false
    let luckyNum = [ 4, 7, 44, 47, 74, 77, 444, 447, 477, 777, 774, 747, 474, 744 ]
    for (let i = 0; i < luckyNum.length; i++){
        if(t%luckyNum[i]===0) check=true
    }
    print(luckyNum.includes(t)||check?"YES":"NO")
}
