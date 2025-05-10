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

  for(let i = 0; i < t; i++) {
    let n= parseInt(readline());
    let arr = readline().split(" ");
    let fl = []
    for(let j = 0; j < n; j++) {
      fl.push(arr[ j ][ 0 ]);
    }
    fl = fl.sort()
    let count = 1;
    let r=[]
    for(let j = 1; j < n; j++) {
      if (fl[ j ] === fl[ j - 1 ]) {
        count++;
      } else {
        if (count > 1) r.push(count);
        count = 1;
      }
    }
    if (count > 1) r.push(count);
    
    let res = 0;
    for(let j = 0; j < r.length; j++) {
      res += (r[ j ] * (r[ j ] - 1)) / 2;
    }
    print(res)
  }
}
