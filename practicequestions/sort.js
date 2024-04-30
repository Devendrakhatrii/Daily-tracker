const people = [
  { name: "devendra", age: 30 },
  { name: "snigdha", age: 20 },
  { name: "ram", age: 10 },
];

let result = people.sort((a, b) => {
  return a.age - b.age;
});

console.log(result);

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

number.sort((a, b) => {});