const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

let massRequirement = characters.filter((item) => item.mass > 100);
console.log(massRequirement);
let heightRequirement = characters.filter((item) => item.height < 200);
console.log(heightRequirement);
let males = characters.filter((item) => item.gender === "male");
console.log(males);
let females = characters.filter((item) => item.gender === "female");
console.log(females);
