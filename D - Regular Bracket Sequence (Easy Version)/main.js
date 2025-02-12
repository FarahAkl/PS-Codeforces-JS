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
  let p = readline().trim().split("");
  let s = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      s.push(p[i]);
    } else if (p[i] === ")" && s.length > 0) {
      s.pop();
    } else {
      print("No")
      return
    }
  }
  print(s.length === 0 ? "Yes" : "No");
}
