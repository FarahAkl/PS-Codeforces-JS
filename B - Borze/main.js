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
  let w = readline().trim().split("");
  let s = [];
  let ans = "";
  for (let i = 0; i < w.length; i++) {
    if (s.length == 0 && w[i] == ".") {
      ans += "0";
    } else if (s.length == 0 && w[i] != ".") {
      s.push(w[i]);
    } else if (s.length == 1 && w[i] == ".") {
      ans += "1";
      s.pop();
    } else if (s.length == 1 && w[i] == "-") {
      ans += "2";
      s.pop();
    }
  }
  print(ans);
}
