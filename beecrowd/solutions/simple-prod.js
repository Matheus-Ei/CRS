const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");

const a = Number(lines[0]);
const b = Number(lines[1]);

console.log(`PROD = ${a * b}`);
