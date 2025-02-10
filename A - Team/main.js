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
    let counter = 0
  const n = parseInt(readline());
    for (let i = 0; i < n; i++){
        let trys = readline().trim().split(" ")
        let count =0 
        for (let j = 0; j <3; j++){
            if(trys[j]==1)count++
        }
        if(count>=2)counter++
    }
    print(counter)
}
