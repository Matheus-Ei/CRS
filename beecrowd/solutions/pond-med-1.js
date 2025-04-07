const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");

const a = Number(lines[0]).toFixed(1);
const b = Number(lines[1]).toFixed(1);

const med = (a * 3.5 + b * 7.5) / 11.0;

console.log(`MEDIA = ${med.toFixed(5)}`);
