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
  const n = parseInt(readline());

  let result = 0;
  for (let i = 0; i < n; i++) {
    let l = readline().trim();
    if (l === "Tetrahedron") {
      result += 4;
    } else if (l === "Cube") {
      result += 6;
    } else if (l === "Octahedron") {
      result += 8;
    } else if (l === "Dodecahedron") {
      result += 12;
    } else if (l === "Icosahedron") {
      result += 20;
    }
  }
  print(result);
}
