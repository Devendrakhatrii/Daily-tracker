const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = 2;
const limit = 2;
// write a js function that takes in data,page and limit and return the data
//[3,4]

console.log(data.slice(1, 3));
const paginateData = (data, page, limit) => {
  return data.slice(page, limit);
};

const result = paginateData(data, page, limit);
console.log(result);
