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
    let nums = readline().trim().split(" ").map(Number)
    let abc = Math.max(...nums)
    nums.splice(nums.indexOf(abc),1)
    print(`${abc - nums[0]} ${abc - nums[1]} ${abc - nums[2]}`);
}
