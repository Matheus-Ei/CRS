const array = "Meu nome é Matheus".split("");

const string = array
  .map((s, i) => (i % 2 === 0 ? s.toUpperCase() : s.toLowerCase()))
  .join("");

console.log(string);
