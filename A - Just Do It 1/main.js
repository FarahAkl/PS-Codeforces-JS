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
  let arr = [];
  for (let i = 0; i < t; i++) {
    let q = readline().trim().split(" ").map(Number);
    if (q[0] === 1) {
      arr.push(q[1]);
    } else if (q[0] === 2) {
      let index = arr.indexOf(q[1]); 
      if (index !== -1) arr.splice(index, 1); 
    } else if (q[ 0 ] === 3) {
        print(arr.length > 0 ? Math.min(...arr) : "It is Just EMPTY");
    }
  }
}
