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
  let t = "2 ";
  if (n % 2 === 0) {
    print(`${n / 2}\n${t.repeat(n / 2)}`);
  } else {
    print(`${((n - 3) / 2)+1}\n${t.repeat((n - 3) / 2)}3`);
  }
}
