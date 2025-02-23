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
  function binarySearch(value) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  let t = parseInt(readline());
  let arr = [];
  for (let i = 0; i < t; i++) {
    let q = readline().trim().split(" ");
    let val = Number(q[1]);
    if (q[0] === "insert") {
      let p = binarySearch(val);
      if (arr[p] !== val) {
        arr.splice(p, 0, val);
      }
    } else if (q[0] === "find") {
      print(arr.includes(val) ? "found" : "not found");
    } else if (q[0] === "upper_bound") {
      let p = binarySearch(val + 1);
      print(p < arr.length ? `${arr[p]}` : "-1");
    } else if (q[0] === "lower_bound") {
      let p = binarySearch(val);
      print(p < arr.length ? `${arr[p]}` : "-1");
    }
  }
}
