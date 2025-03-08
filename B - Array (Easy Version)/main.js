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
    let arr = readline().split(" ").map(Number)
    let arr2 = [ ...arr ]
    for (let i = 1; i < n; i++){
        arr2[i]+=arr2[i-1]
    }
    let q = parseInt(readline())
    for (let i = 0;i<q;i++){
        let [l,r] = readline().split(" ").map(Number)
        let sum = arr2[r-1]- (l>1 ? arr2[l-2] : 0)
        print(sum)
    }
}