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
    let result =[]
    for (let i = 0; i < n; i++){
        if (i % 2 === 0) {
            result.push("I hate")
        } else {
            result.push("I love")
        }
    }
    print(`${result.join(" that ")} it`)
}
