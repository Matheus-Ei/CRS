const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);
const d = Number(lines[3]);

const difference = a * b - c * d;
console.log(`DIFERENCA = ${difference}`);
