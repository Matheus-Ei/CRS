const input = require("fs").readFileSync("./stdin.txt", "utf8");

const [radio] = input.split("\n");

const area = Number(radio) * Number(radio) * 3.14159;

console.log(`A=${area.toFixed(4)}`);
