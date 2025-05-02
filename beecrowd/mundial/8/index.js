const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

for (let i = 1; i < lines.length; i = i + 2) {
  const lesmas = getValues(lines[i]);

  lesmas.sort((a, b) => a - b);
  largest = parseInt(lesmas[lesmas.length - 1], 10); 

  if (largest < 10) {
    console.log("1");
  } else if (largest >= 10 && largest < 20) { 
    console.log("2");
  } else {
    console.log("3");
  }
}
