const input = require("fs").readFileSync("./stdin.txt", "utf8");

const [a, b] = input.split("\n");

const x = Number(a) + Number(b);

console.log(`X = ${x}`);
