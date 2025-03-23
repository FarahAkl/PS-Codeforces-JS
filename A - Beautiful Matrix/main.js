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
  let n = [];
  for (let i = 0; i < 5; i++) {
    n.push(readline().split(" ").map(Number));
    }
    for (let i = 0;i<5;i++){
      for (let j = 0;j<5;j++){
        if (n[i][j] == 1){
          print(Math.abs(i-2)+Math.abs(j-2));
          break;
        }
      }
    }
}
