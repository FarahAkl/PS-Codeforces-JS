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
  const n = parseInt(readline().trim());
  let s = 0;
  let d = 0;
  let i = 0;
  let j = n - 1;
  let cards = readline().trim().split(" ").map(Number);
  for (let k = 0; k < n; k++) {
      if (k % 2 === 0) {
        if (cards[i] > cards[j]) {
          s += cards[i++];
        } else {
          s += cards[j--];
        }
      } else {
        if (cards[i] > cards[j]) {
          d += cards[i++];
        } else {
          d += cards[j--];
        }
      }
    }
  print(`${s} ${d}`);
}
