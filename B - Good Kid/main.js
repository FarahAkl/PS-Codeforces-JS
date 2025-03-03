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
        let n = parseInt(readline());
        let arr = readline().split(' ').map(Number).sort((a, b) => a - b);
        let pro = arr[ 0 ] + 1;
        for (let j = 1; j < n; j++){
            pro *=arr[j]
        }
        print(pro);
    }
}
