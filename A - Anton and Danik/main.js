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
    let num = parseInt(readline())
    let won = readline().trim()
    let anton = 0;
    for (let i = 0; i < num; i++){
        if (won[ i ].toUpperCase() === "A") {
            anton++
        }
    }
    if (anton > (num / 2)) {
        print("Anton")
    } else if (anton < (num / 2)) {
        print("Danik")
    } else {
        print("Friendship")
    }
}
