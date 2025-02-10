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
    for (let i = 0; i < t; i++){
        let num = parseInt(readline());
        if (num >= 1900) {
          print("Division 1");
        } else if (num >= 1600 && num <= 1899) {
          print("Division 2");
        } else if (num >= 1400 && num <= 1599) {
          print("Division 3");
        } else {
            print("Division 4");
        }
    }
}
