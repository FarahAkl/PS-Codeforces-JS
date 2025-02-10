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
  let t = readline().trim();
  if (t.toUpperCase() === t) {
    print(t.toLowerCase());
  } else if(t[0].toLowerCase()+t.slice(1).toUpperCase() ===t) {
    print(
      `${t[0].toUpperCase()}${t.slice(1).toLowerCase()}`
    );
  } else {
      print(t)
  }
}
