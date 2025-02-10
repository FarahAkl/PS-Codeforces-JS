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
  let n = parseInt(readline());
    let counter = 0;
    let steps = [5,4,3,2,1]
    for (let i = 0; i < steps.length; i++){
        while (n >= steps[ i ]&& n!=0) {
            n -= steps[ i ]
            counter++
        }
    }
    print(counter)
}
