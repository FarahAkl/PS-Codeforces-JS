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
    let arr = new Array(n).fill(null).map(() => new Array(n).fill(0));
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if ((j % 2 === 0 && k % 2 !== 0) || (j % 2 !== 0 && k % 2 === 0)) {
          arr[j][k] = "..";
        } else {
          arr[j][k] = "##";
        }
      }
    }
    let repeated = [].concat(...arr.map((item) => [item, item]));
    for (let j = 0; j < repeated.length ; j++) {
      repeated[j] = repeated[j].join("");
    }
    print(repeated.join("\n"));
  }
}
