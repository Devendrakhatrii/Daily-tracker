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

let nameArr = characters.map((item) => {
  return item.name;
});
console.log(nameArr);

let heightArr = characters.map((item) => {
  return item.height;
});
console.log(heightArr);
let newArr = characters.map((item) => {
  return { name: item.name, height: item.height };
});
console.log(newArr);

let firstName = characters.map((items) => items.name.split(" "));

console.log(firstName);
console.log(firstNameOnly);
