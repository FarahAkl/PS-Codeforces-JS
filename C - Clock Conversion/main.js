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
    let [h, m] = readline().trim().split(":").map(Number);
    if (h < 12) {
      print(
        `${h === 0 ? "12" : h < 10 ? `0${h}` : `${h}`}:${
          m < 10 ? `0${m}` : `${m}`
        } AM`
      );
    } else {
      print(
        `${h - 12 === 0 ? "12" : h - 12 < 10 ? `0${h - 12}` : `${h - 12}`}:${
          m < 10 ? `0${m}` : `${m}`
        } PM`
      );
    }
  }
}
