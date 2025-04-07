const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");

const a = Number(lines[0]).toFixed(1);
const b = Number(lines[1]).toFixed(1);
const c = Number(lines[2]).toFixed(1);

const med = (a * 2 + b * 3 + c * 5) / 10.0;

console.log(`MEDIA = ${med.toFixed(1)}`);
