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
    let t = parseInt(readline())
    for (let i = 0; i < t; i++){
        let [ n1, n2, n3 ] = readline().trim().split(' ').map(Number)
        if (n1 < n2 && n2 < n3) {
            print('STAIR')
        } else if (n1 < n2 && n2 > n3) {
            print("PEAK");
        } else {
            print("NONE");
        }
    }
}
