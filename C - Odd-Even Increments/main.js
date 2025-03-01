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
    let a = arr.filter((x) => x % 2 === 0);
    let b = arr.filter((x) => x % 2 === 1);
    if (a.length === 0 || b.length === 0) {
      print("Yes");
      continue;
    }
    for (let k = 0; k < n; k += 2) {
      arr[k] = arr[k] + 1;
    }
    let arr2 = arr.filter((x) => x % 2 === 0);
    print(arr2.length === 0 || arr.length === arr2.length ? "Yes" : "No");
  }
}
