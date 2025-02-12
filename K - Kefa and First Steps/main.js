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
    let arr = readline().trim().split(" ").map(Number)
    let seq = []
    let counter = 1;
    for (let i = 1; i < n; i++){
        if(arr[i]>=arr[i-1]){
            counter++
        }else{
            seq.push(counter)
            counter =1
        }
    }
    print(seq.length===0?`${counter}`:`${Math.max(...seq,counter)}`)
}
