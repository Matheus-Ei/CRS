const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const id = lines[0];
const salaryPerHour = Number(lines[1]);
const numberHours = Number(lines[2]);

console.log(`NUMBER = ${id}`);
console.log(`SALARY = U$ ${(salaryPerHour * numberHours).toFixed(2)}`);
