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

let sortedNames = characters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedNames);
let sortedMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortedMass);
let sortedHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortedHeight);
let sortedGender = characters.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(sortedGender);
