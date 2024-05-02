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

let totalMass = characters.reduce((total, nex) => {
  return total + Number(nex.mass);
}, 0);
let totalHeight = characters.reduce((total, nex) => {
  return total + Number(nex.height);
}, 0);

console.log(totalMass);
console.log(totalHeight);

let nameLength = characters.reduce((acc, char) => {
  return acc + char.name.length;
}, 0);
console.log(nameLength);
