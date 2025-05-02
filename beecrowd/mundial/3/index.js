const input = require("fs").readFileSync("./stdin.txt", "utf8");

let lines = input.split("\n");
lines = lines.filter((l) => l.trim() !== '')
lines.shift()

lines.forEach((i) => {
  let sum = 0;

  const number = Number(i);

  for (let n = 1; n < number; n++) {
    if (number % n === 0) {
      sum = sum + n;
    }
  }

  if (sum === number) {
    console.log(`${number} eh perfeito`);
  } else {
    console.log(`${number} nao eh perfeito`);
  }
});
