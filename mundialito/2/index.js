const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");

const numberPums = Number(lines[0]);

let number = 1;
let output = '';

for(let i = 0; i<numberPums; i++){
  for(let j = 0; j<4; j++) {
    if(number % 4 === 0) {
      number++;
      output = output + ` PUM`
      continue;
    }

      if(j === 0) {
        output = output + `${number}`
    } else {
        output = output + ` ${number}`
    }

    number++;
  }

  if(numberPums !== i + 1) {
    output = output + `\n`;
  }
}

  console.log(output)

