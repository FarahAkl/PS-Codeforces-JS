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
  let t = parseInt(readline());
  for (let i = 0;i<t;i++){
    let a = 0;
    let b = 0;
    let n = readline().split('');
    for (let j = 0; j < 5; j++){
      if (n[j] == 'A'){
        a++;
      }else if (n[j] == 'B'){
        b++;
      }
    }
    print(a > b ? 'A' :'B');
  }
}
