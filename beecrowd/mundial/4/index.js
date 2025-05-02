const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const numb = Number(lines[0]);
let  line = '';
for (let i = 0; i < numb; i++) {
  
    if (i === numb - 1) {
       line = line + 'Ho!'; 
    } else {
        line = line + 'Ho '; 
    }
}

console.log(line);