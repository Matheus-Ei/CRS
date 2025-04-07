const animals = [
  { name: "Cow", region: "Africa", makeNoise: () => console.log("MUUU") },
  { name: "Dog", region: "Europa", makeNoise: () => console.log("AAAUUU") },
  {
    name: "Chicken",
    region: "Africa",
    makeNoise: () => console.log("COCORICO"),
  },
];

animals.forEach((a) => {
  console.log(a.name);
  console.log(a.region);
  a.makeNoise();
});
