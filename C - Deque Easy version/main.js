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
  let deque = [];
  for (let i = 0; i < n; i++) {
    let e = readline().trim().split(" ");
    if (e[0] === "push_back") {
      deque.push(e[1]);
    } else if (e[0] === "push_front") {
      deque.unshift(e[1]);
    } else if (e[0] === "pop_back") {
      deque.pop();
    } else if (e[0] === "pop_front") {
      deque.shift();
    } else if (e[0] === "back") {
      print(deque[deque.length - 1]);
    } else if (e[0] === "front") {
      print(deque[0]);
    } else if (e[0] === "print") {
      print(deque[parseInt(e[1]) - 1]);
    }
  }
}
