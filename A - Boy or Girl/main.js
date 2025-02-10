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
  const t = readline().trim();
  const mySet = new Set(t.split(""));
  print(
    `${Array(...mySet).length % 2 == 1 ? "IGNORE HIM!" : "CHAT WITH HER!"}`
  );
}
