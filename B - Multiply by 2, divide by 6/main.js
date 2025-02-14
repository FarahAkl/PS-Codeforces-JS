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
    let counter = 0;
    let temp = n;
    while (temp % 2 === 0) temp /= 2;
    while (temp % 3 === 0) temp /= 3;
    if (temp !== 1) {
      print(-1);
      continue;
    }
    while (n > 1) {
      if (n % 6 === 0) {
        n /= 6;
      } else {
        if (n % 3 !== 0) {
          counter = -1;
          break;
        }
        n *= 2;
      }
      counter++;
    }
    print(counter);
  }
}
