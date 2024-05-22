const car = {
  name: "Tesla",
  model: "x",
  launch: 2020,
  age: () => {
    return console.log(2024 - car.launch);
  },
};

car.age();
