const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const salaryFixed = Number(lines[1]);
const solds = Number(lines[2]);

console.log(`TOTAL = R$ ${(salaryFixed + solds * 0.15).toFixed(2)}`);
