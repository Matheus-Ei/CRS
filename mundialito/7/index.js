const input = require("fs").readFileSync("./stdin.txt", "utf8");

const lines = input.split("\n");
const getValues = (v) => v.split(" ");

const array = ['PROXYCITY',
'P.Y.N.G.',
'DNSUEY!',
'SERVERS',
'HOST!',
'CRIPTONIZE',
'OFFLINE DAY',
'SALT',
'ANSWER!',
'RAR?',
'WIFI ANTENNAS ']

for (let i = 1; i < lines.length; i++) {
  
  const soma = Number(getValues(lines[i])[0]) + Number(getValues(lines[i])[1]);
  if (soma < array.length) {
  console.log(array[soma]);}


}

