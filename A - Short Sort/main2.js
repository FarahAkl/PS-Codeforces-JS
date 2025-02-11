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
    let n = parseInt(readline())
    let cases = [ "abc", "acb", "bac", "cba" ]
    for (let i = 0; i < n; i++){
        let c = readline().trim()
        print(cases.includes(c) ? "YES":"NO")
    }
}