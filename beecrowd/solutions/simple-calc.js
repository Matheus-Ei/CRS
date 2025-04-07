const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const firstValues = getValues(lines[0]);
const secondValues = getValues(lines[1]);

const costFirst = Number(firstValues[1]) * Number(firstValues[2]).toFixed(2);
const costSecond = Number(secondValues[1]) * Number(secondValues[2]).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${(costFirst + costSecond).toFixed(2)}`);
