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
  let t = parseInt(readline());
  for (let i = 0; i < t; i++) {
    let n = parseInt(readline());
    let arr = readline().trim().split(" ").map(Number);
    let arr2 = [];
      for (let j = 0; j < n - 1; j++) {
        arr = arr.sort((a,b)=>a-b)
      if (arr[j] === arr[j + 1]) {
        arr2.push(arr[j]);
      }
    }
    let s = new Set(arr);
    print(
      arr2.length > 0
        ? `${[...s].sort((a, b) => a - b).join(" ")} ${arr2
            .sort((a, b) => a - b)
            .join(" ")}`
        : `${[...s].join(" ")}`
    );
  }
}
