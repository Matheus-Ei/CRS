const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const linha = getValues(lines[0]);
let  line = '';
const total = Number(linha[0]) * Number(linha[1]);

for (let i = 1; i<10 ; i++) {
   const divisor = i/10;

   if(i === 1) {
    line = line + `${Math.ceil(total*divisor)}`;
   } else {
     line = line + ` ${Math.ceil(total*divisor)}`;

   }
   

}
console.log(line);