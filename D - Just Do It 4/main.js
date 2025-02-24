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
  const binaryInsert = (arr, num) => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < num) left = mid + 1;
      else right = mid;
    }
    arr.splice(left, 0, num);
  };
  let t = parseInt(readline());
  let arr = [];
  for (let i = 0; i < t; i++) {
    let q = readline().trim().split(" ");
    if (q[0] === "push") {
      binaryInsert(arr, Number(q[1]));
    } else if (q[0] === "pop") {
      arr.length > 0 ? arr.pop() : print("IT IS JUST EMPTY");
    } else if (q[0] === "top") {
      print(arr.length > 0 ? `${arr[arr.length - 1]}` : "IT IS JUST EMPTY");
    }
  }
}
