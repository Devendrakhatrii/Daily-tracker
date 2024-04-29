let str = "hello";

const reverser = (string) => {
  var match = string.match(/[aeiou]/gi);
  console.log(match);
  return match ? match.length : 0;
};

let vowels = reverser(str);
console.log(vowels);
