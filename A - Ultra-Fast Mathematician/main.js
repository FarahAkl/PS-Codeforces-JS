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
  let num1= readline().trim()
    let num2 = readline().trim();
    let result =''
    for (let i = 0; i < num1.length; i++){
        result += (num1[i] == num2[i]) ? "0" : "1";
    }
    print(result)
}
