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
    const n = parseInt(readline());
    let x = 0;
    for (let i = 0; i < n; i++){
        let operation = readline().trim()
        if (operation === "X++") {
            x++
        } else if (operation === "++X") {
            ++x
        } else if (operation === "X--") {
            x--
        } else if (operation === "--X") {
            --x
        }
    }print(x)
}
