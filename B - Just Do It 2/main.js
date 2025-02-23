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
  let [n, q] = readline().trim().split(" ").map(Number);
  let m = new Map();
  for (let i = 0; i < n; i++) {
    let [n, v] = readline().trim().split(" ");
    m.set(n, Number(v));
  }
  for (let i = 0; i < q; i++) {
    let w = readline().trim().split(" ");
    let k = w[1];
    if (w[0] === "1") {
      let val = Number(w[2]);
      m.set(k, m.get(k) + val);
    } else if (w[0] === "2") {
      print(m.get(k))
    }
  }
}
